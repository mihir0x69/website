import React from 'react'
import { Helmet } from 'react-helmet'

const DefaultMetaTags: React.FC = () => (
    <Helmet>
        {/* Facebook meta start */}
        <meta property="og:title" content="Mihir Karandikar" />
        <meta
            property="og:description"
            content="Personal blog by Mihir | Technology, politics and life."
        />
        <meta
            property="og:image"
            content="https://i.ibb.co/LS1Gwd4/IMG-20191201-103559-2.jpg"
        />
        <meta property="og:url" content="https://mihir.life" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="mihir.life" />
        <meta property="og:type" content="article" />
        {/* Facebook meta end */}

        {/* Twitter meta start */}
        <meta name="twitter:title" content="Mihir Karandikar" />
        <meta name="twitter:site" content="@KarandikarMihir" />
        <meta
            name="twitter:description"
            content="Personal blog by Mihir. I discuss tech, politics and life."
        />
        <meta
            name="twitter:image"
            content="https://i.ibb.co/LS1Gwd4/IMG-20191201-103559-2.jpg"
        />
        <meta name="twitter:card" content="summary" />
        {/* Twitter meta end */}
    </Helmet>
)

export default DefaultMetaTags
