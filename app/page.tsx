import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import events from "@/lib/constants";

const Page = () => {

    return (

        <section>
            <h1>Kudonjo Events< br/> Dev Events You Don't Wish to Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences All in one Place</p>

            <ExploreBtn />

            <div className='mt-20 space-y-7'>
                {events.map((event) => (
                    <li key={event.title}>
                        <EventCard {...event} />
                    </li>
                ))}
            </div>
        </section>
    )

}

export default Page
