export default function Footer() {
    const footerStyle = {
        position: "fixed",
        width: "100%",
        height: "80px",
        bottom: "0",
        textAlign: "center",
        lineHeight: "80px",
        zIndex: "1000"
    }
    return (
        <>
            <footer style={footerStyle} className="bg-blue-400 text-white">Copyright © jun0222</footer>
        </>
    )
}