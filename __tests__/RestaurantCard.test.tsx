import RestaurantCard from "../src/components/RestaurantCard"
import { render,screen } from "@testing-library/react"
import MOCK_DATA from "../src/mocks/resCardMock.json"
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../src/components/RestaurantCard";

const PromotedCard = withPromotedLabel(RestaurantCard);

it("Should render Restaurant Card Component with props data",()=> {
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
});

it("Should render Resturant Card with Promoted Label", ()=> {
    render(<PromotedCard resData={MOCK_DATA}/>);

    const label = screen.getByText("PROMOTED");
    expect(label).toBeInTheDocument();
});