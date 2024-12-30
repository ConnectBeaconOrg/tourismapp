import Banner from "@/components/Banner";
import PopularLocations from "@/components/PopularLocations";
import ReveloLayout from "@/layout/ReveloLayout";
const page = () => {
    return (
        <ReveloLayout>
            <Banner pageTitle={"Popular Tourist Spots"} />
            {/* About Area start */}
            <section className="features-tour-area pt-30 rel z-1">
                <div className="container">

                    <div className="row justify-content-center">
                        <PopularLocations />
                    </div>
                </div>
            </section>
            {/* About Area end */}
        </ReveloLayout>
    );
};
export default page;
