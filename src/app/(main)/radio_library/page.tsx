import RadioLibraryCards from "@/components/global/radioLibraryCards/RadioLibraryCards";
import styles from "./radioLibrary.module.scss";
import LearnMore from "@/components/global/learnMore/LearnMore";

export default function Page() {
  const dummyData = [
    {
      imageUrl:
        "https://www.wesellrestaurants.com/public/uploads/radioshows/guests/jerrycouvaras_1.jpg",
      name: "John Doe",
      title: "Restaurant Brokers Discuss Restaurant Products on Grocery Shelves(On air date :12-22-2017)",
      description:
        "We're hearing from the best in the industry about why Pork is a healthy, tastchefs. Beyond the classic bacon or pork chop, how is pork being popularized by some of the best chefs in the business? What's the production of pork in America and how is the industry tying into the sustainable food trend? What are some of the quick statistics on this business showing the productivity of the pork industry? Join the restaurant brokers as we go hog wild on the public's insatiable appetite for pork..",
    },
    {
      imageUrl:
        "https://www.wesellrestaurants.com/public/uploads/radioshows/guests/andrewwaber_1.jpg",
      name: "Jane Smith",
      title: "Restaurant Brokers Discuss Restaurant Products on Grocery Shelves(On air date :12-22-2017)",
      description:
        "We're hearing from the best in the inoday's chefs. Beyond the classic bacon or pork chop, how is pork being popularized by some of the best chefs in the business? What's the production of pork in America and how is the industry tying into the sustainable food trend? What are some of the quick statistics on this business showing the productivity of the pork industry? Join the restaurant brokers as we go hog wild on the public's insatiable appetite for pork..",
    },
    {
      imageUrl:
        "https://www.wesellrestaurants.com/public/uploads/radioshows/guests/restaurant-startup-s2-cast-thumb-ant.jpg",
      name: "Michael Johnson",
      title: "Restaurant Brokers Discuss Restaurant Products on Grocery Shelves(On air date :12-22-2017)",
      description:
        "We're hearing from the best in the indust's chefs. Beyond the classic bacon or pork chop, how is pork being popularized by some of the best chefs in the business? What's the production of pork in America and how is the industry tying into the sustainable food trend? What are some of the quick statistics on this business showing the productivity of the pork industry? Join the restaurant brokers as we go hog wild on the public's insatiable appetite for pork..",
    },
    {
      imageUrl:
        "https://www.wesellrestaurants.com/public/uploads/radioshows/guests/tim-headshot2.jpg",
      name: "Emily Brown",
      title: "Restaurant Brokers Discuss Restaurant Products on Grocery Shelves(On air date :12-22-2017)",
      description:
        "We're hearing from the best in the industry about why Pork is a healthy, tasty and readily available protein for today's chefs. Beyond the classic bacon or pork chop, how is pork being popularized by some of the best chefs in the business? What's the production of pork in America and how is the industry tying into the sustainable food trend? What are some of the quick statistics on this business showing the productivity of the pork industry? Join the restaurant brokers as we go hog wild on the public's insatiable appetite for pork..",
    },
    {
      imageUrl:
        "https://www.wesellrestaurants.com/public/uploads/radioshows/guests/Evan_Weinstein_photo_2.jpg",
      name: "William Davis",
      title: "Restaurant Brokers Discuss Restaurant Products on Grocery Shelves(On air date :12-22-2017)",
      description:
        "We're hearing from the best in the industry about why Pork is a healthy, tasty and readily available protein for today's chefs. Beyond the classic bacon or pork chop, how is pork being popularized by some of the best chefs in the business? What's the production of pork in America and how is the industry tying into the sustainable food trend? What are some of the quick statistics on this business showing the productivity of the pork industry? Join the restaurant brokers as we go hog wild on the public's insatiable appetite for pork..",
    },
  ];

  return (
    <section id={styles.radioPage}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.radioPage} d-flex gap-3`}>
          <div className={`${styles.radioPage_left} col-md-9`}>
            <h2>On Air Library</h2>
            <div className={`${styles.radioPage_list} `}>
              {dummyData?.map((item, index) => (
                <div key={index}>
                  <RadioLibraryCards
                    key={index}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.radioPage_right} col-md-3`}>
            <LearnMore />
          </div>
        </div>
      </div>
    </section>
  );
}
