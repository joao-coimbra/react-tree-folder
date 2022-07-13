import { useState } from 'react';
import './style.scss'

import { FcFolder, FcOpenedFolder, FcFile } from 'react-icons/fc';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { VscNewFolder, VscNewFile } from 'react-icons/vsc';

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
    
    return  <ul className={'folder' + (isOpen ? '' : ' close')}>
                <div className='content' onClick={e => {
                    // if (!e) var e = window.event;
                    e.cancelBubble = true;
                    if (e.stopPropagation) e.stopPropagation();
                                            setIsOpen(!isOpen)
                                        }}>
                    <div>
                        {!isOpen
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
                    <div className='funcs'>
                        <VscNewFolder title='new folder' onClick={e => {
                                // if (!e) var e = window.event;
                                e.cancelBubble = true;
                                if (e.stopPropagation) e.stopPropagation();
                                setChildrens([...childrens, <RenderFolder name='new folder' />])
                            }}/>
                        <VscNewFile title='new file' onClick={e => {
                                // if (!e) var e = window.event;
                                e.cancelBubble = true;
                                if (e.stopPropagation) e.stopPropagation();
                                setChildrens([...childrens, <RenderFile name='new file' />])
                            }}/>
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