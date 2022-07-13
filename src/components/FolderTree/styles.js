import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: fit-content;
    position: fixed;
    left: 0;
    background-color: #282c34;
    height: 100vh;
    color: white;
    text-align: left;

    div, p, li {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const ContentFolders = styled.div`
    min-width: 10vw;
    width: 20vw;
    max-width: 400px;
`

const UploadFiles = styled.label`

`

const RenderFolder = styled.ul`
    list-style-type: none;
    padding: 0;
    padding-left: 10px;
`

const RenderFirstFolder = styled(RenderFolder)`
`

const Resizer = styled.span.attrs((/* props */) => ({ tabIndex: 0 }))`
    width: 5px;
    height: 100%;

    cursor: ew-resize;

    &:hover {
        background-color: #ffffff20;
    }
`

export {
    Container,
    ContentFolders,
    UploadFiles,
    RenderFolder,
    RenderFirstFolder,
    Resizer
}