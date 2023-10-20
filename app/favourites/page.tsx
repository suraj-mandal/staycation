import getCurrentUser from "../actions/getCurrentUser"
import getFavouriteListings from "../actions/getFavouriteListings";
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState";
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {

    const currentUser = await getCurrentUser();
    const listings = await getFavouriteListings();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favourites found"
                    subtitle="Looks like you have no favourites listings."
                />
            </ClientOnly>
        );
    }

    return <ClientOnly>
        <FavouritesClient
            listings={listings}
            currentUser={currentUser}
        />
    </ClientOnly>


}

export default FavouritesPage;
