import Navbar from "./components/navbar/Navbar";
import "./app.css";
import Card from "./components/card/Card";
import db from "./db.json";
import React, { useEffect, useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import ReactPaginate from "react-paginate";
import MultiRangeSlider from "multi-range-slider-react";
import Footer from "./components/footer/Footer";
import "./calendar.css";

const App = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("house");

  const handlePrice = (e) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);
  };
  const validateDate = (c) => {
    if (!date) return true;
    const inputDate = new Date(date);
    return c.availability.some(
      ({ startDate, endDate }) =>
        inputDate >= new Date(startDate) && inputDate <= new Date(endDate)
    );
  };
  const validatePrice = (c) => c.price <= maxPrice && c.price >= minPrice;

  const validateLocation = ({ address }) => {
    if (!location) return true;
    return (
      address.street.toLowerCase().includes(location.toLowerCase()) ||
      address.city.toLowerCase().includes(location.toLowerCase()) ||
      address.country.toLowerCase().includes(location.toLowerCase()) ||
      address.countryCode.toLowerCase().includes(location.toLowerCase())
    );
  };

  const validateType = (c) => c.type === type || type === "others";

  const validateSearch = ({ name }) => {
    if (!search) return true;
    return name.toLowerCase().includes(search.toLowerCase());
  };

  const validate = (c) => {
    return (
      validateSearch(c) &&
      validateDate(c) &&
      validatePrice(c) &&
      validateLocation(c) &&
      validateType(c)
    );
  };

  useEffect(() => {
    setData(
      db?.sort((e1, e2) => {
        if (e1.tag > e2.tag) return -1;
        return 1;
      })
    );
    setPageCount(Math.ceil(db.length / 9));
  }, []);

  const handleSubmit = () => {
    console.log(data, date, price, type, location, search);
    const newData = db?.filter((c) => validate(c));
    setPageCount(Math.ceil(newData.length / 9));
    setData(
      newData?.sort((e1, e2) => {
        if (e1.tag > e2.tag) return -1;
        return 1;
      })
    );
  };

  return (
    <div>
      <Navbar />
      <main className="main">
        <section className="search">
          <h1 className="search-title">Search properties to rent</h1>
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search with Search Bar"
          />
          <div className="search-filters">
            <div className="filter">
              <div className="filter-label">Location</div>
              <input
                type="text"
                className="filter-input"
                value={location}
                placeholder="Pick a location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="filter">
              <div className="filter-label">When</div>
              <DatePicker
                date={date}
                onDateChange={setDate}
                locale={enGB}
                className="nice-dates-popover"
              >
                {({ inputProps, focused }) => (
                  <input
                    className={"input calendar " + (focused ? " -focused" : "")}
                    {...inputProps}
                    placeholder="Select Move-in Date"
                  />
                )}
              </DatePicker>
            </div>
            <div className="filter">
              <div className="filter-label">Price</div>
              <MultiRangeSlider
                min={0}
                max={10000}
                step={5}
                minValue={minPrice}
                maxValue={maxPrice}
                onInput={(e) => {
                  handlePrice(e);
                }}
                barRightColor="white"
                barInnerColor="#6e44ff"
                barLeftColor="white"
                className="filter-input filter-price-slider "
                thumbLeftColor="white"
                thumbRightColor="white"
                ruler="false"
                labels={["$0", "$10000"]}
              />
            </div>
            <div className="filter">
              <div className="filter-label">Property Type</div>
              <select
                className="filter-input"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="house">House</option>
                <option value="cottage">Cottage</option>
                <option value="villa">Villa</option>
                <option value="cabin">Cabin</option>
                <option value="loft">Loft</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>
            <div className="filter">
              <button className="submit" onClick={handleSubmit}>
                search
              </button>
            </div>
          </div>
        </section>
        <div className="cards">
          {data.slice((page - 1) * 9, page * 9).map((card) => (
            <Card card={card} id={card.id} />
          ))}
        </div>
        <ReactPaginate
          containerClassName="pagination"
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => setPage(e.selected + 1)}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-label"
          previousClassName="page-label"
          nextClassName="page-label"
          activeClassName="active-page page-label"
          renderOnZeroPageCount={null}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
