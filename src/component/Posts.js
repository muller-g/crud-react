import React from 'react';

const Posts = ({ posts }) => {
  return (
    <>
        {
            posts.map((searched, i) =>
            <tr key={i}>
                <td>{searched.nome}</td>
                <td>{searched.colaborador}</td>   
                <td>{searched.numero_patrimonio}</td>  
                <td>{searched.estado}</td>  
            </tr>
            )                        
        }
    </>
  );
};

export default Posts;