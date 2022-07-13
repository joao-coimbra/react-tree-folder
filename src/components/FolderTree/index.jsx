import { useState } from 'react';
import {
    Container,
    ContentFolders,
    // UploadFiles,
    RenderFolder,
    RenderFirstFolder,
    Resizer
} from './styles'

// import { FcFolder, FcOpenedFolder, FcFile } from 'react-icons/fc';
// import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
// import { VscNewFolder } from 'react-icons/vsc';

function FolderTree({data, resize}) {

    const [initialPos, setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);

    // const [folders, setFolders] = useState([])

    // console.log(folders)

    return (
        <Container>
            <ContentFolders>
                {data &&
                    (data.type === 'folder')
                        ? <RenderFirstFolder>
                            <li>
                                <div className="info">
                                    <p>{data.name}</p>
                                </div>
                                <RenderFolder>
                                    <li>other</li>
                                </RenderFolder>
                            </li>
                        </RenderFirstFolder>
                        : <></>
                }
            </ContentFolders>
            {resize && <Resizer
                draggable='true'
                onDragStart={e => {
                    setInitialPos(e.clientX);
                    setInitialSize(e.target.previousElementSibling.offsetWidth);            
                }} 
                onDrag={e => e.target.previousElementSibling.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px` }
                onDragEnd={e => e.target.previousElementSibling.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px` }
            />}
        </Container>
    )
}

export { FolderTree }