import React from 'react';
import { ReactSVG } from 'react-svg';
import { Tooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';

function IconSvg({ className, icon, id, content, position, classTooltip, ...restProps }) {
    return (
        <React.Fragment>
            <div
                className={className}
                data-tooltip-id={id}
                data-tooltip-content={content}
                data-tooltip-place={position}
                {...restProps}
            >
                <ReactSVG src={icon} />
            </div>
            <Tooltip id={id} className={classTooltip} />
        </React.Fragment>
    );
}

export default IconSvg;
