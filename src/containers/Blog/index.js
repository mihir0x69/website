import React from 'react'
import marked from 'marked'

const markup = marked(`---
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading`
)

const Blog = (props) => 
    <div dangerouslySetInnerHTML={{ __html: markup }}>
    </div>

export default Blog