const ImageComponent = (params) => {
    return (
        <img src={params.src} alt={params.alt} style={{ maxWidth: "250px"}} />
    )
}

export default ImageComponent