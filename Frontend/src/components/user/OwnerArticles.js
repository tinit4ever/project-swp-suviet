import React, { useState, useEffect } from 'react';
import '../PostPage.css'

const OwnerArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchOwnerArticles = async (page) => {
    try {
      const response = await fetch(`http://localhost:8080/api/articles/owner/article/${page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Fetched owner articles:', data.data);
        setArticles(data.data);
        setTotalPages(data.total_pages);
      } else {
        // Handle error when fetching owner articles
        console.error('Failed to fetch owner articles');
      }
    } catch (error) {
      console.error('Failed to fetch owner articles', error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetchOwnerArticles(currentPage);
  }, [currentPage]);

  if (articles === null) {
    return <div>Loading...</div>;
  }
  const filteredArticles = articles.filter((article) => article.status);
  return (
    <div className='owner-article-page'>
      <h1 style={{backgroundColor: '#fff', paddingBottom: '30px'}}>Bài viết bạn đã đăng</h1>
      {filteredArticles.length === 0 ? (
        <p>Tạm thời chưa có</p>
      ) : (
        <>
      {filteredArticles.map((article) => (
        <div className='owner-article-page-card' key={article.articleID}
        style={{
          margin: 'auto',
          color: '#fff',
          fontWeight: '',
          fontSize: '18px',
          borderRadius: '25px',
          marginTop: '30px',
          padding: '15px 15px',
          width: '1200px'
        }}>
          <h2>{article.title}</h2>
          <p><b>Nội dung: </b>{article.context}</p>
          <p><b>Ngày đăng: </b>{article.createdDate}</p>
          <p><b>Lượt xem: </b>{article.articleView}</p>
          <p><b>Đánh giá: </b>{article.voteLevel}</p>
        </div>
      ))}
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Trang trước
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Trang sau
        </button>
      </div>
      </>
      )}
    </div>
  );
};

export default OwnerArticles;
