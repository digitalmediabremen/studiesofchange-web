import bg01 from "@/../public/assets/design/arrow@2x.png";
import bg02 from "@/../public/assets/design/back@2x.png";
import border from "@/../public/assets/design/border@2x.png";

export function Background() {
    return (
        <section>
            <div
                className="bg-cover"
                style={{
                    backgroundImage: `url(${bg02.src})`,
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,

                }}
            >
            </div>
            <div
                className="bg-cover"
                style={{
                    backgroundImage: `url(${bg01.src})`,
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,

                }}
            >
            </div>
            <div
                className="bg-cover"
                style={{
                    backgroundImage: `url(${border.src})`,
                    backgroundPosition: "top center",
                    backgroundRepeat: "repeat-y",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1,

                }}

            >
            </div>
        </section>
    );
}

export default Background;