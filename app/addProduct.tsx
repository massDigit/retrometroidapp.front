import React from 'react';
import AddProductForm from './components/AddProductForm'

const AddProductPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Ajouter un produit</h1>
      <AddProductForm />

      <style jsx>{`
        .page-container {
          padding: 40px;
          background-color: #121212;
          color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .page-title {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #00e676;
          text-shadow: 0 0 8px #00e676;
        }
      `}</style>
    </div>
  );
};

export default AddProductPage;
