import React from "react"
import '../../styles/tag.css'

const Tag = ({data}) => {
    // console.log(data.tags);
    const tags = data.tags
    console.log(tags)


    return(
        <div className="list-tag">
            {tags.map((tag, index) => (
                    <div key={`${index}-${tag}`} >
                        <div className="tag" >
                            <p>{tag}</p>
                        </div>
                    </div>
                ))} 
        </div>
    )

}
export default Tag