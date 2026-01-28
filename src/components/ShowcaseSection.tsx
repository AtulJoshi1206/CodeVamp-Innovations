import { ContainerScroll } from "./ui/container-scroll-animation";
import CodeVampImg from "../Images/CodeVamp.png";

export const ShowcaseSection = () => {
    return (
        <section className="bg-background py-20 overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <div className="flex flex-col">
                        <h2 className="text-accent-cyan font-bold tracking-[0.2em] text-xs uppercase mb-4">Production Ready</h2>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                            Systems Engineered for <br />
                            <span className="text-gray-600">Scale & Impact.</span>
                        </h1>
                    </div>
                }
            >
                <img
                    src={CodeVampImg}
                    alt="CodeVamp Showcase"
                    className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
                    draggable={false}
                />
            </ContainerScroll>
        </section>
    );
};
