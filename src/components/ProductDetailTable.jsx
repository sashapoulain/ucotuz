import React from "react";

const ProductDetailTable = ({ product }) => {
  return (
    <div className="detail-table-wrapper">
      <table className="table table-borderless detail-table mb-0">
        <tbody>
          <tr>
            <td>Marka</td>
            <td>:</td>
            <td>{product.brand}</td>
          </tr>
          <tr>
            <td>Durumu</td>
            <td>:</td>
            <td className="text-success">{product.condition}</td>
          </tr>
          <tr>
            <td>İlan No</td>
            <td>:</td>
            <td>{product.listingNumber}</td>
          </tr>
          <tr>
            <td>Kimden</td>
            <td>:</td>
            <td>{product.seller}</td>
          </tr>
          <tr>
            <td>Kategori</td>
            <td>:</td>
            <td>{product.category}</td>
          </tr>
          <tr>
            <td>İlan Tarihi</td>
            <td>:</td>
            <td>{product.listingDate}</td>
          </tr>
          <tr>
            <td>Yılı</td>
            <td>:</td>
            <td>{product.year}</td>
          </tr>
          <tr>
            <td>Adet</td>
            <td>:</td>
            <td>{product.quantity}</td>
          </tr>
          <tr>
            <td>Fiyat</td>
            <td>:</td>
            <td>{product.priceDetails}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailTable;
