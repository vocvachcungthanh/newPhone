import React from 'react';

import { IconSvg } from '~/components/commons/icons';
import { IconPhone } from '~/assets/images';

function HotLine() {
    return (
        <div className="flex items-center ml-6">
            <IconSvg icon={IconPhone} className="text-[#ed1f27] w-[30px] flex-shrink-0" />
            <div className="ml-2.5">
                <h4>Tư vấn hỗ trợ</h4>
                <a href="tel:190006750" className="flex font-bold text-lg text-[#eb3e32] hover:opacity-70">
                    190006750
                </a>
            </div>
        </div>
    );
}

export default HotLine;
