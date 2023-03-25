import React from 'react';

import { IconSvg } from '~/components/commons/icons';
import { IconUser } from '~/assets/images';

function Account(props) {
    return (
        <div className="flex items-center ml-6">
            <IconSvg icon={IconUser} className="text-[#ed1f27] w-[30px] flex-shrink-0" />
            <div className="ml-2.5">
                <h4>Xin chào!</h4>
                <div className="flex font-bold text-sm text-[#eb3e32] hover:opacity-70">Đăng nhập</div>
            </div>
        </div>
    );
}

export default Account;
