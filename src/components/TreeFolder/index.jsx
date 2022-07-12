import { useState } from 'react';
import './style.scss'

import { FcFolder, FcOpenedFolder, FcFile } from 'react-icons/fc';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';

function TreeFolder(props) {
    
    const [initialPos, setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    
    return(
        <div id='tree-folder'>
            <div className='content'>
                {props.children}
            </div>
            <span id='resize'
                draggable='true'
                onDragStart={e => {
                    setInitialPos(e.clientX);
                    setInitialSize(e.target.previousElementSibling.offsetWidth);            
                }} 
                onDrag={e => e.target.previousElementSibling.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px` }
                onDragEnd={e => e.target.previousElementSibling.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px` }
            />
        </div>
    );
}

const RenderFolder = ({name, children, isOpened = false}) => {

    const [childrens, setChildrens] = useState(children ? children : []);

    const [isOpen, setIsOpen] = useState(isOpened)
    // console.log(props)
    return  <ul className={'folder' + (isOpen ? ' open' : '')}>
                <div className='content' onClick={() => {
                    setIsOpen(!isOpen)
                    setChildrens([...childrens, <RenderFile name='1' />])
                }}>
                    <div>
                        {isOpen
                            ? <>
                                <IoMdArrowDropright/>
                                <FcFolder />
                            </>
                            : <>
                                <IoMdArrowDropdown />
                                <FcOpenedFolder />
                            </>
                        }
                        <p>{name}</p>
                    </div>
                </div>
                {Array.isArray(childrens)
                    ? childrens.map((el, index) => <li key={index} className={el?.type.name.toLowerCase()}>{el}</li>)
                    : <li className={children?.type.name.toLowerCase()}>{children}</li>
                }
            </ul>
}

const RenderFile = ({name}) => {
    return <><FcFile /><p>{name}</p></>
}

export { TreeFolder, RenderFolder, RenderFile };