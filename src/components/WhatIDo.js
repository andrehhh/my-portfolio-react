import React from 'react';

import WhatIDoCard from './WhatIDoCard';

const WhatIDo = () => {
    return (
        <div className="what-i-do" id="what-i-do-section">
            <div className="what-i-do-container container">
                <h1>What I Do</h1>
                <ul>
                    <WhatIDoCard type="uiux" />
                    <WhatIDoCard type="frontend" />
                    <WhatIDoCard type="backend" />
                </ul>
            </div>
        </div>
    )
}

export default WhatIDo
