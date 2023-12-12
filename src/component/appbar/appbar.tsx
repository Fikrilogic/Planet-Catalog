import React from 'react';
import {AppbarHeader, BurgerButton, AppbarColumn} from './appbar.style'


interface AppbarProps {
    isopen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AppBar: React.FC<AppbarProps> = ({isopen, setIsOpen}) => {
    return (
        <AppbarHeader>
           <AppbarColumn>
            <div>
                <BurgerButton $isopen={isopen} onClick={() => setIsOpen(!isopen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </BurgerButton>
            </div>
           </AppbarColumn>
        </AppbarHeader>
    );
}

export default AppBar