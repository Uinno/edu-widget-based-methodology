import CarDetailsWidget from "./widgets/CarDetails/CarDetails.widget";

export default async function CarDetailsPage({params}: { params: { id: string } }) {

    return (
        <div className="overflow-x-auto flex justify-center p-20">
            {/*@ts-ignore*/}
            <CarDetailsWidget id={params.id}/>
        </div>
    )
}
