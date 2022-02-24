import React from "react";
import Article from "./Article";

function ArticaList({info}) {
    console.log( info[0].preview)

    return (
        <main>
            {
                info.map(info=>(
           
          <Article 
          key={info.id} 
          title={info.title}
           date={info.date}
            descrip={info.preview}
          /> 
          ))
            }
        </main>
    )

}

export default ArticaList

