import moment from "moment";
// import disabledArrow from "../assets/images/disabledArrow.svg"
// import decArrow from "../assets/images/downactiveArrow.svg"
// import incArrow from "../assets/images/topactiveArrow.svg"

export const decarbLine = {
    high_emission_intensity: [],
    low_emission_intensity: [{
        id: 3,
        emission_intensity: 48,
        number_of_lanes: 2,
        number_of_vendors: 1,
        share_of_tonnage: 5,
    }, {
        id: 4,
        emission_intensity: 50,
        number_of_lanes: 2,
        number_of_vendors: 1,
        share_of_tonnage: 35,
    }]
}

export const decarbDetailLine = [{
    id: 1,
    source: "Riverside",
    destination: "Fort Worth",
    shipments: "120,000",
    emission_intensity: 85,
    emission_intensity_percent: 11,
}]


export const yearList = (dto) => {

    let a = []
    for (let i = Number.parseInt(moment(dto?.start_date).format("YYYY")); i <= moment(dto?.end_date).format("YYYY"); i++) {
        a.push(i)
    }
    return a
}

export const pageSizeList = [10, 20, 30, 40, 50]

export const getQuarterYear = (date) => {
    const quarter = Math.ceil(Number(moment.utc(date).format("MM")) / 3)
    const year = Number(moment.utc(date).format("YYYY"))

    return `Q${quarter} ${year}`
}



export const sortIcon = (key, col_name, order) => {
    if (col_name === key) {
        return "test"
    } else {
        return "test 2"
    }
}

export const getQuarters = (yearlyData) => {
    const latestYear = new Date().getFullYear();
    var quarter = Math.floor((new Date().getMonth() + 3) / 3);

    let list = [{ value: "", name: quarter <= 4 ? "YTD" : "All" }, { value: 1, name: "Q1" }]
    if (Number.parseInt(yearlyData, 10) >= latestYear) {

        if (quarter >= 2) {
            list.push({ value: 2, name: "Q2" })
        }

        if (quarter >= 3) {
            list.push({ value: 3, name: "Q3" })
        }

        if (quarter >= 4) {
            list.push({ value: 4, name: "Q4" })
        }

    } else {
        list = [{ value: "", name: "All" }, { value: 1, name: "Q1" }, { value: 2, name: "Q2" }, { value: 3, name: "Q3" }, { value: 4, name: "Q4" }]
    }
    return list
}


export const getGraphDataHorizontal = (res, key) => {
    let regionPageArr = []
    let regionPageArrMerge = []
    if (res?.data?.contributor) {
        regionPageArr = res?.data?.contributor?.filter(i => i?.name !== key)?.map(i => ({
            ...i,
            name: i.name,
            y: i.value,
            color: i.color,
            yAxis: 1,

            dataLabels: [{
                inside: false,
                enabled: true,
                rotation: 0,
                x: 32,
                overflow: "none",
                allowOverlap: false,
                color: "#212121",
                align: "center",
                crop: false,

                formatter() {
                    return ``;
                },
            },
                // {
                //     inside: true,
                //     enabled: true,
                //     rotation: 0,
                //     x: -30,
                //     overflow: "none",
                //     allowOverlap: true,
                //     color: "#212121",
                //     align: "left",
                //     crop: false,

                //     formatter() {
                //         return this.key;
                //     },
                // }
            ],
            type: "column",
        }))
    }
    if (res?.data?.detractor) {
        regionPageArrMerge = res?.data?.detractor?.filter(i => i?.name !== key)?.map(i => ({
            ...i,
            name: i.name,
            y: -Number(i.value) - ((res?.data?.detractor[2]?.value || 0) - (res?.data?.detractor[0]?.value || 0)),
            yValue: -Number(i.value),
            color: i.color,
            yAxis: 0,
            type: "column",

            dataLabels: [{
                inside: false,
                enabled: true,
                rotation: 0,
                x: -30,

                overflow: "none",
                allowOverlap: false,
                color: "#212121",
                align: "center",
                crop: false,
                formatter: function () {
                    return ``;
                },
            },
                // {
                //     inside: true,
                //     enabled: true,
                //     rotation: 0,
                //     x: 30,
                //     overflow: "none",
                //     allowOverlap: true,
                //     color: "#212121",
                //     align: "right",
                //     crop: false,

                //     formatter() {
                //         return this.key;
                //     },
                // }
            ],
        }));
    }
    return [...regionPageArr, ...regionPageArrMerge]
}

export const getGraphData = (res, key) => {
    let regionPageArr = []
    let regionPageArrMerge = []
    if (res?.data?.contributor) {
        regionPageArr = res?.data?.contributor?.filter(i => i?.name !== key)?.map(i => ({
            ...i,
            name: i.name,
            y: i.value,
            color: i.color,
            yAxis: 1,

            dataLabels: [{
                inside: false,
                enabled: true,
                rotation: 0,
                x: 32,
                overflow: "none",
                allowOverlap: false,
                color: "#212121",
                align: "center",
                crop: false,

                formatter() {
                    return `+ ${Math.abs(this.y).round(1)?.toLocaleString("en-US", {
                        minimumFractionDigits: 1,
                    })}`;
                },
            },
                // {
                //     inside: true,
                //     enabled: true,
                //     rotation: 0,
                //     x: -30,
                //     overflow: "none",
                //     allowOverlap: true,
                //     color: "#212121",
                //     align: "left",
                //     crop: false,

                //     formatter() {
                //         return this.key;
                //     },
                // }
            ],
            type: "column",
        }))
    }
    if (res?.data?.detractor) {
        regionPageArrMerge = res?.data?.detractor?.filter(i => i?.name !== key)?.map(i => ({
            ...i,
            name: i.name,
            y: -Number(i.value),
            color: i.color,
            yAxis: 0,
            type: "column",

            dataLabels: [{
                inside: false,
                enabled: true,
                rotation: 0,
                x: -30,

                overflow: "none",
                allowOverlap: false,
                color: "#212121",
                align: "center",
                crop: false,
                formatter: function () {
                    return `- ${Math.abs(this.y).round(1)?.toLocaleString("en-US", {
                        minimumFractionDigits: 1,
                    })}`;
                },
            },
                // {
                //     inside: true,
                //     enabled: true,
                //     rotation: 0,
                //     x: 30,
                //     overflow: "none",
                //     allowOverlap: true,
                //     color: "#212121",
                //     align: "right",
                //     crop: false,

                //     formatter() {
                //         return this.key;
                //     },
                // }
            ],
        }));
    }
    return [...regionPageArr, ...regionPageArrMerge]
}


export const getQuarterName = (data, year) => {
    const latestYear = new Date().getFullYear();
    let quarterName = Number.parseInt(data)
    if (Number.parseInt(data)) {
        if (Number.parseInt(data) === 1) {
            quarterName = "Q1"
        }
        if (Number.parseInt(data) === 2) {
            quarterName = "Q2"
        }

        if (Number.parseInt(data) === 3) {
            quarterName = "Q3"
        }

        if (Number.parseInt(data) === 4) {
            quarterName = "Q4"
        }

    } else {
        if (latestYear === Number.parseInt(year)) {
            quarterName = ""
        } else {
            quarterName = "All Quarters of"
        }
    }

    return quarterName
}

export const getRegionName = (regions, regionalLevel, isList = false) => {
    if (regionalLevel) {
        if (isList) {
            return `${regions} Region`
        } else {
            return `${regions?.data?.regions.filter((e) => { return e.id === Number.parseInt(regionalLevel) })[0]?.name} Region`

        }
    } else {
        return "All Regions"
    }
}


export const getTitleDecarb = (key) => {
    if (key === "modal_shift") {
        return "Modal Shift"
    }
    if (key === "alternative_fuel") {
        return "Alternative Fuel Usage"
    }
    if (key === "carrier_shift") {
        return "Carrier Shift"
    }

}

export const getHeaderName = (key) => {
    if (key === "modal_shift") {
        return "Modal Shift"
    } else {
        return "Dashboard"
    }

}

const regionList = [{
    id: 5,
    modalShiftpercentage: 35,
    carrierShiftpercentage: 20,
    alternativeShiftpercentage: 5,
    marker: {
        lat: 39.7684, lng: -86.1581
    },
    wayPoint: [{
        locationName: "Mill street charlottesville, Usa",
        lat: 39.7684,
        log: -86.1581
    }, {
        locationName: "Charlottesville, USA",
        lat: 38.0293,
        log: -78.4767
    }]
},
{
    id: 17,
    modalShiftpercentage: 32,
    carrierShiftpercentage: 25,
    alternativeShiftpercentage: 5,
    wayPoint: [{
        locationName: "Glendon, USA ",
        lat: 40.668538,
        log: -75.227398
    }, {
        locationName: "Philipsburg Newark Expy, USA", lat: 40.64809192584201, log: -74.6456
    }]
},
{
    id: 13,
    modalShiftpercentage: 30,
    carrierShiftpercentage: 25,
    alternativeShiftpercentage: 5,
    wayPoint: [{
        locationName: "Selinsgrove, USA",
        lat: 40.7990,
        log: -76.8622
    }, {
        locationName: "Danville, PA, USA", lat: 40.99775427960836, log: -76.64073778808651
    }]
},
{
    id: 3,
    modalShiftpercentage: 40,
    carrierShiftpercentage: 20,
    alternativeShiftpercentage: 5,
    wayPoint: [{
        locationName: "Ahoskie, NC",
        lat: 36.2868,
        log: -76.9847
    }, {

        locationName: "Rocky Mount, USA", lat: 35.942133612378086, log: -77.77727250711646
    }]
},
{
    id: 9,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    company: 'Lowes',
    wayPoint: [{
        locationName: "Morongo Valley, CA, USA", lat: 34.0470, log: -116.5808
    }, {
        locationName: "Lucerne Valley, ca",
        lat: 34.4438,
        log: -116.9677
    }]
},
{
    id: 9,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    company: 'General mills',
    wayPoint: [{
        locationName: "St. Louis, Mo ", lat: 38.6270, log: -90.1994
    }, {
        locationName: "Cape Girardeau, Mo",
        lat: 37.3059,
        log: -89.5181
    }]
},
{
    id: 12,
    modalShiftpercentage: 36,
    carrierShiftpercentage: 24,
    alternativeShiftpercentage: 5,
    marker: {
        lat: 30.2752, lng: -89.7812
    },
    wayPoint: [{
        locationName: "West Memphis, Arkansas, USA",
        lat: 35.122387,
        log: -90.063253
    }, {
        locationName: "Little Rock, USA",
        lat: 34.7239177935919,
        log: -92.27024484660606
    }]
},
{
    id: 12,
    modalShiftpercentage: 36,
    carrierShiftpercentage: 24,
    alternativeShiftpercentage: 5,
    company: 'General mills',
    marker: {
        lat: 30.2752, lng: -89.7812
    },
    wayPoint: [{
        locationName: "Salt Lake City, Ut",
        lat: 40.7608,
        log: -111.8910
    }, {
        locationName: "Sioux Falls, South Dakota, USA",
        lat: 43.5460,
        log: -96.7313
    }]
},

{
    id: 25,
    modalShiftpercentage: 36,
    carrierShiftpercentage: 24,
    alternativeShiftpercentage: 5,
    marker: {
        lat: 30.2752, lng: -89.7812
    },
    wayPoint: [{
        locationName: "West Memphis, Arkansas, USA",
        lat: 35.122387,
        log: -90.063253
    }, {
        locationName: "Little Rock, USA",
        lat: 34.7239177935919,
        log: -92.27024484660606
    }]
}, {
    id: 28,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,

    wayPoint: [{
        locationName: "Kansas city, USA",
        lat: 39.0997,
        log: -94.5786
    }, {
        locationName: "Chicago mo, USA", lat: 41.8781, log: -87.6298
    }]
}]


const wayPointList = [{
    id: 28,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    origin: "PITTSTON, PA",
    destination: "BROOKLYN, NY",
    wayPoint: [{
        locationName: "Glendon, USA ",
        lat: 40.668538,
        log: -75.227398
    }, {
        locationName: "Philipsburg Newark Expy, USA", lat: 40.64809192584201, log: -74.6456
    }]
}, {
    id: 28,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    origin: "PITTSTON, PA",
    destination: "MEDFORD, NY",
    wayPoint: [{
        locationName: "Easton pa, USA ",
        lat: 40.688431,
        log: -75.220734
    }, {
        locationName: "New York, Ny, USA", lat: 40.7128, log: -74.0060
    }]
}, {
    id: 28,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    origin: "SHIPPENSBURG, PA",
    destination: "SYRACUSE, NY",
    wayPoint: [{
        locationName: "Selinsgrove, USA",
        lat: 40.7990,
        log: -76.8622
    }, {
        locationName: "Danville, PA, USA", lat: 40.99775427960836, log: -76.64073778808651
    }]
}, {
    id: 28,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    origin: "PERRIS, CA",
    destination: "LAS VEGAS, NV",
    wayPoint: [{
        locationName: "Morongo Valley, CA, USA", lat: 34.0470, log: -116.5808
    }, {
        locationName: "Lucerne Valley, ca",
        lat: 34.4438,
        log: -116.9677
    }]
},
{
    id: 28,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    origin: "CHESAPEAKE, VA",
    destination: "ROCKFORD, IL",
    wayPoint: [{
        locationName: "Mill street charlottesville, Usa",
        lat: 39.7684,
        log: -86.1581
    }, {
        locationName: "Charlottesville, USA",
        lat: 38.0293,
        log: -78.4767
    }]
},
{
    id: 3,
    modalShiftpercentage: 40,
    carrierShiftpercentage: 20,
    alternativeShiftpercentage: 5,
    origin: "CHESAPEAKE, VA",
    destination: "STATESVILLE, NC",
    wayPoint: [{
        locationName: "Ahoskie, NC",
        lat: 36.2868,
        log: -76.9847
    }, {

        locationName: "Rocky Mount, USA", lat: 35.942133612378086, log: -77.77727250711646
    }]
}, {
    id: 12,
    modalShiftpercentage: 36,
    carrierShiftpercentage: 24,
    alternativeShiftpercentage: 5,
    marker: {
        lat: 30.2752, lng: -89.7812
    },
    origin: "ADAIRSVILLE, GA",
    destination: "SHREVEPORT, LA",
    wayPoint: [{
        locationName: "West Memphis, Arkansas, USA",
        lat: 35.122387,
        log: -90.063253
    }, {
        locationName: "Little Rock, USA",
        lat: 34.7239177935919,
        log: -92.27024484660606
    }]
},
{
    id: 12,
    modalShiftpercentage: 36,
    carrierShiftpercentage: 24,
    alternativeShiftpercentage: 5,
    company: 'General mills',
    origin: "VERNON, CA",
    destination: "MINNEAPOLIS, MN",
    marker: {
        lat: 30.2752, lng: -89.7812
    },
    wayPoint: [{
        locationName: "Salt Lake City, Ut",
        lat: 40.7608,
        log: -111.8910
    }, {
        locationName: "Sioux Falls, South Dakota, USA",
        lat: 43.5460,
        log: -96.7313
    }]
},

{
    id: 9,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    company: 'General mills',
    origin: "MONTGOMERY, IL",
    destination: "MURFREESBORO, TN",
    wayPoint: [{
        locationName: "St. Louis, Mo ", lat: 38.6270, log: -90.1994
    }, {
        locationName: "Cape Girardeau, Mo",
        lat: 37.3059,
        log: -89.5181
    }]
},
{
    id: 9,
    modalShiftpercentage: 34,
    carrierShiftpercentage: 26,
    alternativeShiftpercentage: 5,
    company: 'General mills',
    origin: "GARNER, NC",
    destination: "ROCKFORD, IL",
    wayPoint: [{
        locationName: "Louisville, ky ", lat: 38.2527, log: -85.7585
    }, {
        locationName: "Cape Girardeau, Mo",
        lat: 37.3059,
        log: -89.5181
    }]
},

]


export const getRegion = (origin, destination) => {
    return wayPointList?.filter(i => i?.origin === origin && destination === i?.destination)[0]?.wayPoint || null
}

export const getPercentage = (regionId, type) => {
    let percentageDto = regionList?.filter(i => i?.id === Number.parseInt(regionId))[0]
    let percentage = 0
    switch (type) {
        case "carrier_shift":
            percentage = percentageDto?.carrierShiftpercentage || 0
            break;
        case "alternative_fuel":
            percentage = percentageDto?.alternativeShiftpercentage || 0

            break;
        case "modal_shift":
            percentage = percentageDto?.modalShiftpercentage || 0

            break;

    }
    return percentage
}

export const getModalShiftEmissions = (value, regionsLevel, key, index) => {
    let percentage = getPercentage(regionsLevel, key)
    let emmision = 0
    console.log("value, percentage, index", value, regionsLevel, key, index, percentage)
    switch (index) {
        case 0:
            emmision = ((value * ((100 - percentage) / 100)) * 0.4).round(1)?.toLocaleString(
                "en-US",
                {
                    minimumFractionDigits: 1,
                }
            )
            break;
        case 1:
            emmision = 'N/A'

            break;
        case 2:
            emmision = ((value * ((100 - percentage) / 100)) * 0.6).round(1)?.toLocaleString(
                "en-US",
                {
                    minimumFractionDigits: 1,
                }
            )

            break;

    }
    return emmision
}

export const getMarkerR = (regionId) => {
    return regionList?.filter(i => i?.id === Number.parseInt(regionId))[0]?.marker || null
}


export const isCompayEnable = (userDetail) => {
    if (userDetail?.Company?.name === "General mills") {
        return true
    } else if (userDetail?.Company?.name === "Lowes") {
        return false
    } else {
        return false
    }
}

export const getCompanyName = (userDetail) => {
    if (userDetail?.Company?.name === "General mills") {
        return userDetail?.Company?.name
    } else if (userDetail?.Company?.name === "Lowes") {
        return "LOWE'S GROUP"
    } else {
        return "LOWE'S GROUP"
    }

}


export const capitalizeText = (str) => {
    return str?.toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// 45.6


export const listCode = [{
    "region_code": "NW",
    "post_code": "WA"
}, {
    "region_code": "NW",
    "post_code": "MT"
}, {
    "region_code": "NW",
    "post_code": "OR"
}, {
    "region_code": "NW",
    "post_code": "ID"
}, {
    "region_code": "NW",
    "post_code": "WY"
}, {
    "region_code": "NW",
    "post_code": "AK"
}, {
    "region_code": "SW",
    "post_code": "CA"
}, {
    "region_code": "SW",
    "post_code": "NV"
}, {
    "region_code": "SW",
    "post_code": "UT"
}, {
    "region_code": "SW",
    "post_code": "NM"
}, {
    "region_code": "SW",
    "post_code": "CA"
}, {
    "region_code": "SW",
    "post_code": "AZ"
}, {
    "region_code": "MW",
    "post_code": "ND"
}, {
    "region_code": "MW",
    "post_code": "SD"
}, {
    "region_code": "MW",
    "post_code": "NE"
}, {
    "region_code": "MW",
    "post_code": "KS"
}, {
    "region_code": "MW",
    "post_code": "CO"
}, {
    "region_code": "MW",
    "post_code": "MO"
}, {
    "region_code": "MW",
    "post_code": "IA"
}, {
    "region_code": "MW",
    "post_code": "MN"
}, {
    "region_code": "South",
    "post_code": "OK"
}, {
    "region_code": "South",
    "post_code": "TX"
}, {
    "region_code": "South",
    "post_code": "LA"
}, {
    "region_code": "GL",
    "post_code": "WI"
}, {
    "region_code": "GL",
    "post_code": "IL"
}, {
    "region_code": "GL",
    "post_code": "MI"
}, {
    "region_code": "GL",
    "post_code": "WV"
}, {
    "region_code": "GL",
    "post_code": "IN"
}, {
    "region_code": "GL",
    "post_code": "OH"
}, {
    "region_code": "GL",
    "post_code": "KY"
}, {
    "region_code": "GL",
    "post_code": "VA"
}, {
    "region_code": "GL",
    "post_code": "MD"
}, {
    "region_code": "SE",
    "post_code": "AR"
}, {
    "region_code": "SE",
    "post_code": "MS"
}, {
    "region_code": "SE",
    "post_code": "AL"
}, {
    "region_code": "SE",
    "post_code": "TN"
}, {
    "region_code": "SE",
    "post_code": "GA"
}, {
    "region_code": "SE",
    "post_code": "FL"
}, {
    "region_code": "SE",
    "post_code": "SC"
}, {
    "region_code": "SE",
    "post_code": "NC"
}, {
    "region_code": "N-E",
    "post_code": "PA"
}, {
    "region_code": "N-E",
    "post_code": "NJ"
}, {
    "region_code": "N-E",
    "post_code": "NY"
}, {
    "region_code": "N-E",
    "post_code": "CT"
}, {
    "region_code": "N-E",
    "post_code": "RI"
}, {
    "region_code": "N-E",
    "post_code": "MA"
}, {
    "region_code": "N-E",
    "post_code": "NH"
}, {
    "region_code": "N-E",
    "post_code": "VT"
}, {
    "region_code": "N-E",
    "post_code": "ME"
}, {
    "region_code": "N-E",
    "post_code": "DE"
}]

export const listCodeFuc = (code) => {
    let regionCode = listCode?.filter(i => i?.post_code === code)[0]?.region_code
    return listCode?.filter(i => i?.region_code === regionCode)?.map(i => i?.post_code)

}


export const laneMarker = [
    { lat: 40.9598, lng: -80.6603 },
    { lat: 41.5228, lng: -83.4615 },
    { lat: 41.7441, lng: -84.9993 },
    { lat: 41.736, lng: -86.3368 },
    { lat: 41.2761, lng: -81.6259 },
    { lat: 39.634, lng: -77.8068 },
    { lat: 37.4998, lng: -77.0892 },
    { lat: 39.6291, lng: -77.7839 },
    { lat: 41.5731, lng: -87.4021 },
    { lat: 41.6047, lng: -87.1147 },
    { lat: 41.5864, lng: -87.2382 },
    {
        lat: 41.5351, lng: -83.46
    },
    { lat: 41.5648, lng: -87.4032 },
    { lat: 37.9329, lng: -77.473 },
    { lat: 37.9399, lng: -77.4661 },
    { lat: 37.9401, lng: -77.4681 },
    { lat: 41.5885, lng: -87.2394 },
    { lat: 41.988, lng: -87.9603 },
]


export const laneRoute = [{lat: 36.7029513, lng: -76.599206},
    {lat: 36.7237265, lng: -76.5877},
    {lat: 36.7254272, lng: -76.5856855},
    {lat: 36.7266582, lng: -76.5848205},
    {lat: 36.728194, lng: -76.583215},
    {lat: 36.737688, lng: -76.582598},
    {lat: 36.73901, lng: -76.567729},
    {lat: 36.738862, lng: -76.567566},
    {lat: 36.7490951, lng: -76.530831},
    {lat: 36.753016, lng: -76.518703},
    {lat: 36.762839, lng: -76.48801},
    {lat: 36.763828, lng: -76.484875},
    {lat: 36.764922, lng: -76.481393},
    {lat: 36.779755, lng: -76.434013},
    {lat: 36.786432, lng: -76.423315},
    {lat: 36.786905, lng: -76.422427},
    {lat: 36.786442, lng: -76.421951},
    {lat: 36.790729, lng: -76.425847},
    {lat: 36.800221, lng: -76.428803},
    {lat: 36.807798, lng: -76.430403},
    {lat: 36.814977, lng: -76.431595},
    {lat: 36.818172, lng: -76.43215},
    {lat: 36.819826, lng: -76.432406},
    {lat: 36.82333, lng: -76.432919},
    {lat: 36.845499, lng: -76.433569},
    {lat: 36.848352, lng: -76.432996},
    {lat: 36.85251, lng: -76.431279},
    {lat: 36.862489, lng: -76.431326},
    {lat: 36.866502, lng: -76.432244},
    {lat: 36.868226, lng: -76.432509},
    {lat: 36.871625, lng: -76.433088},
    {lat: 36.882858, lng: -76.430826},
    {lat: 36.88587, lng: -76.429662},
    {lat: 36.887315, lng: -76.429096},
    {lat: 36.890465, lng: -76.427855},
    {lat: 36.893446, lng: -76.426679},
    {lat: 36.898354, lng: -76.424751},
    {lat: 36.9681212, lng: -76.415647},
    {lat: 36.9725685, lng: -76.4189455},
    {lat: 36.977954, lng: -76.422788},
    {lat: 36.9849492, lng: -76.4270611},
    {lat: 36.9865578, lng: -76.427299},
    {lat: 36.991078, lng: -76.42391},
    {lat: 36.994544, lng: -76.417983},
    {lat: 36.998123, lng: -76.409054},
    {lat: 37.00104, lng: -76.405807},
    {lat: 37.0060819, lng: -76.400784},
    {lat: 37.0137543, lng: -76.3901654},
    {lat: 37.0179613, lng: -76.3841767},
    {lat: 37.0281964, lng: -76.3782106},
    {lat: 37.0343, lng: -76.3856843},
    {lat: 37.0369384, lng: -76.3903826},
    {lat: 37.0397821, lng: -76.3937904},
    {lat: 37.0453071, lng: -76.3998381},
    {lat: 37.0488465, lng: -76.4036302},
    {lat: 37.0581125, lng: -76.4156751},
    {lat: 37.0594329, lng: -76.4176374},
    {lat: 37.0612993, lng: -76.420447},
    {lat: 37.087007, lng: -76.456619},
    {lat: 37.089089, lng: -76.458676},
    {lat: 37.090678, lng: -76.460251},
    {lat: 37.092677, lng: -76.462165},
    {lat: 37.106066, lng: -76.472556},
    {lat: 37.108401, lng: -76.47547},
    {lat: 37.109326, lng: -76.476871},
    {lat: 37.111398, lng: -76.480695},
    {lat: 37.114809, lng: -76.492812},
    {lat: 37.121244, lng: -76.514271},
    {lat: 37.172115, lng: -76.550482},
    {lat: 37.1746097, lng: -76.5516195},
    {lat: 37.1754635, lng: -76.551941},
    {lat: 37.177409, lng: -76.552661},
    {lat: 37.2025444, lng: -76.571397},
    {lat: 37.2147924, lng: -76.5908994},
    {lat: 37.2365115, lng: -76.62926},
    {lat: 37.2457169, lng: -76.6370402},
    {lat: 37.2491926, lng: -76.6396166},
    {lat: 37.2527865, lng: -76.6422595},
    {lat: 37.256818, lng: -76.645203},
    {lat: 37.257341, lng: -76.645602},
    {lat: 37.2607075, lng: -76.6480685},
    {lat: 37.3017846, lng: -76.6817919},
    {lat: 37.303851, lng: -76.683327},
    {lat: 37.3065806, lng: -76.6853439},
    {lat: 37.3489544, lng: -76.7268673},
    {lat: 37.3523312, lng: -76.7306602},
    {lat: 37.3526618, lng: -76.7310396},
    {lat: 37.3573163, lng: -76.7362563},
    {lat: 37.3821714, lng: -76.7593625},
    {lat: 37.3849437, lng: -76.7621884},
    {lat: 37.385868, lng: -76.7632143},
    {lat: 37.3895059, lng: -76.7672493},
    {lat: 37.420172, lng: -76.8190893},
    {lat: 37.423323, lng: -76.830058},
    {lat: 37.4775586, lng: -76.9135555},
    {lat: 37.4808342, lng: -76.9228365},
    {lat: 37.4949833, lng: -77.0176754},
    {lat: 37.4968617, lng: -77.0310186},
    {lat: 37.4978112, lng: -77.0384689},
    {lat: 37.499113, lng: -77.0488037},
    {lat: 37.5035138, lng: -77.0788425},
    {lat: 37.5055751, lng: -77.0909439},
    {lat: 37.5155368, lng: -77.183973},
    {lat: 37.5162305, lng: -77.1892566},
    {lat: 37.5166752, lng: -77.1925919},
    {lat: 37.5153495, lng: -77.2288938},
    {lat: 37.5143666, lng: -77.2367813},
    {lat: 37.5175552, lng: -77.2570885},
    {lat: 37.5200118, lng: -77.2647988},
    {lat: 37.5277634, lng: -77.2713872},
    {lat: 37.5359356, lng: -77.2770305},
    {lat: 37.5447956, lng: -77.2826079},
    {lat: 37.5495197, lng: -77.2855995},
    {lat: 37.5497956, lng: -77.2857633},
    {lat: 37.5550662, lng: -77.2897909},
    {lat: 37.5793778, lng: -77.3217012},
    {lat: 37.5811321, lng: -77.3288235},
    {lat: 37.5811743, lng: -77.3289419},
    {lat: 37.5838155, lng: -77.3341486},
    {lat: 37.6019609, lng: -77.3557485},
    {lat: 37.6075144, lng: -77.3603357},
    {lat: 37.6079763, lng: -77.360634},
    {lat: 37.6134405, lng: -77.3633281},
    {lat: 37.6250174, lng: -77.3682655},
    {lat: 37.629069, lng: -77.3711257},
    {lat: 37.6294249, lng: -77.3715508},
    {lat: 37.6318278, lng: -77.3777334},
    {lat: 37.6402488, lng: -77.4076969},
    {lat: 37.6447332, lng: -77.4132127},
    {lat: 37.6449161, lng: -77.4133776},
    {lat: 37.6507143, lng: -77.418365},
    {lat: 37.6523836, lng: -77.4234924},
    {lat: 37.6731344, lng: -77.4481309},
    {lat: 37.6794841, lng: -77.4505088},
    {lat: 37.6955152, lng: -77.4491358},
    {lat: 37.7158958, lng: -77.4478203},
    {lat: 37.7253184, lng: -77.4498845},
    {lat: 37.7569698, lng: -77.4586431},
    {lat: 37.7603995, lng: -77.4595891},
    {lat: 37.7633401, lng: -77.4604261},
    {lat: 37.8418789, lng: -77.4510254},
    {lat: 37.8491914, lng: -77.4538559},
    {lat: 37.9327371, lng: -77.4677911},
    {lat: 37.93943, lng: -77.472969},
    {lat: 37.9763184, lng: -77.492517},
    {lat: 37.9832248, lng: -77.4925588},
    {lat: 38.0162751, lng: -77.4988927},
    {lat: 38.0219208, lng: -77.4989519},
    {lat: 38.128029, lng: -77.513171},
    {lat: 38.1358913, lng: -77.5094051},
    {lat: 38.2359085, lng: -77.4981994},
    {lat: 38.2408621, lng: -77.5002698},
    {lat: 38.2425921, lng: -77.5016197},
    {lat: 38.2920802, lng: -77.5066218},
    {lat: 38.2969437, lng: -77.5048981},
    {lat: 38.3006507, lng: -77.5035419},
    {lat: 38.3353153, lng: -77.4969378},
    {lat: 38.3482752, lng: -77.4826384},
    {lat: 38.3697084, lng: -77.4657892},
    {lat: 38.3784138, lng: -77.4566855},
    {lat: 38.4153495, lng: -77.4264852},
    {lat: 38.424519, lng: -77.4196897},
    {lat: 38.4576294, lng: -77.4083486},
    {lat: 38.4588823, lng: -77.4084941},
    {lat: 38.4647052, lng: -77.4074678},
    {lat: 38.4660846, lng: -77.4067689},
    {lat: 38.4691463, lng: -77.4047051},
    {lat: 38.485596, lng: -77.3915483},
    {lat: 38.5204138, lng: -77.3709429},
    {lat: 38.5266269, lng: -77.3642383},
    {lat: 38.54631, lng: -77.34446},
    {lat: 38.5535757, lng: -77.3416855},
    {lat: 38.5724674, lng: -77.3304409},
    {lat: 38.57643, lng: -77.326362},
    {lat: 38.580211, lng: -77.322579},
    {lat: 38.584413, lng: -77.3198},
    {lat: 38.591537, lng: -77.316796},
    {lat: 38.603125, lng: -77.311414},
    {lat: 38.6071056, lng: -77.3073991},
    {lat: 38.609228, lng: -77.3055954},
    {lat: 38.6108699, lng: -77.3037851},
    {lat: 38.63147, lng: -77.291765},
    {lat: 38.6477408, lng: -77.2845852},
    {lat: 38.6517095, lng: -77.2823897},
    {lat: 38.6526883, lng: -77.2818391},
    {lat: 38.665064, lng: -77.273956},
    {lat: 38.6718486, lng: -77.2470429},
    {lat: 38.6758925, lng: -77.236049},
    {lat: 38.6813037, lng: -77.2304008},
    {lat: 38.6840782, lng: -77.2287931},
    {lat: 38.729906, lng: -77.198578},
    {lat: 38.7321539, lng: -77.196473},
    {lat: 38.7440439, lng: -77.187726},
    {lat: 38.7490802, lng: -77.1852309},
    {lat: 38.7531653, lng: -77.1839757},
    {lat: 38.7647971, lng: -77.1828166},
    {lat: 38.7721201, lng: -77.1820373},
    {lat: 38.7739813, lng: -77.1813655},
    {lat: 38.7793197, lng: -77.1795299},
    {lat: 38.78289, lng: -77.1787172},
    {lat: 38.786681, lng: -77.1769372},
    {lat: 38.7879966, lng: -77.1762398},
    {lat: 38.7942922, lng: -77.1830555},
    {lat: 38.7962498, lng: -77.1895123},
    {lat: 38.8009249, lng: -77.2085077},
    {lat: 38.8188461, lng: -77.2219616},
    {lat: 38.8583396, lng: -77.2199229},
    {lat: 38.8719298, lng: -77.2200051},
    {lat: 38.8782202, lng: -77.2209645},
    {lat: 38.8912063, lng: -77.2172418},
    {lat: 38.904192, lng: -77.2163512},
    {lat: 38.9161139, lng: -77.2174045},
    {lat: 38.9243981, lng: -77.214769},
    {lat: 38.9258333, lng: -77.2139291},
    {lat: 38.9273821, lng: -77.2131145},
    {lat: 38.932286, lng: -77.2105102},
    {lat: 38.9418637, lng: -77.2046131},
    {lat: 38.951834, lng: -77.19599},
    {lat: 38.957237, lng: -77.192504},
    {lat: 38.9623027, lng: -77.1860576},
    {lat: 38.9659929, lng: -77.1802569},
    {lat: 38.9710929, lng: -77.1790593},
    {lat: 38.9754669, lng: -77.1783018},
    {lat: 38.9843874, lng: -77.159197},
    {lat: 38.9896483, lng: -77.1568537},
    {lat: 38.9950649, lng: -77.1578998},
    {lat: 39.0070358, lng: -77.1529253},
    {lat: 39.0190734, lng: -77.1449978},
    {lat: 39.0212578, lng: -77.1429305},
    {lat: 39.0246814, lng: -77.1416847},
    {lat: 39.0313865, lng: -77.1416321},
    {lat: 39.0366108, lng: -77.1446471},
    {lat: 39.0377501, lng: -77.1453132},
    {lat: 39.047928, lng: -77.1506759},
    {lat: 39.0609256, lng: -77.1555847},
    {lat: 39.077153, lng: -77.168153},
    {lat: 39.0824758, lng: -77.1719703},
    {lat: 39.0866877, lng: -77.1735107},
    {lat: 39.0989791, lng: -77.1782687},
    {lat: 39.1083635, lng: -77.1849826},
    {lat: 39.1175552, lng: -77.1946861},
    {lat: 39.1307974, lng: -77.2057213},
    {lat: 39.1366682, lng: -77.2104645},
    {lat: 39.1393816, lng: -77.2117354},
    {lat: 39.1407279, lng: -77.2124044},
    {lat: 39.1464343, lng: -77.2149509},
    {lat: 39.1486119, lng: -77.2164203},
    {lat: 39.1507555, lng: -77.2182637},
    {lat: 39.1544115, lng: -77.2225374},
    {lat: 39.1548743, lng: -77.2232714},
    {lat: 39.1584835, lng: -77.2281497},
    {lat: 39.1725255, lng: -77.2449831},
    {lat: 39.1758692, lng: -77.2472432},
    {lat: 39.1811582, lng: -77.2515329},
    {lat: 39.1847785, lng: -77.2548917},
    {lat: 39.1897071, lng: -77.2585514},
    {lat: 39.193344, lng: -77.2602158},
    {lat: 39.1975084, lng: -77.2629184},
    {lat: 39.2006937, lng: -77.266101},
    {lat: 39.2284272, lng: -77.2827528},
    {lat: 39.2314882, lng: -77.2845171},
    {lat: 39.260498, lng: -77.308006},
    {lat: 39.2655595, lng: -77.3121152},
    {lat: 39.2781407, lng: -77.3236174},
    {lat: 39.2802448, lng: -77.3245851},
    {lat: 39.323623, lng: -77.3569758},
    {lat: 39.3245131, lng: -77.360371},
    {lat: 39.346871, lng: -77.389329},
    {lat: 39.3493682, lng: -77.3914969},
    {lat: 39.379051, lng: -77.407333},
    {lat: 39.384953, lng: -77.4122525},
    {lat: 39.3904645, lng: -77.4172016},
    {lat: 39.3953645, lng: -77.4202385},
    {lat: 39.3988991, lng: -77.424832},
    {lat: 39.3990441, lng: -77.427693},
    {lat: 39.3984897, lng: -77.4349115},
    {lat: 39.4014648, lng: -77.4450378},
    {lat: 39.4185907, lng: -77.4805875},
    {lat: 39.4306815, lng: -77.4888678},
    {lat: 39.493822, lng: -77.5646359},
    {lat: 39.4990017, lng: -77.5718392},
    {lat: 39.5211921, lng: -77.6001378},
    {lat: 39.5302511, lng: -77.603471},
    {lat: 39.5839943, lng: -77.635453},
    {lat: 39.5882733, lng: -77.6444607},
    {lat: 39.6005331, lng: -77.6763485},
    {lat: 39.6001584, lng: -77.682835},
    {lat: 39.6001307, lng: -77.6832388},
    {lat: 39.5997888, lng: -77.6890972},
    {lat: 39.6056628, lng: -77.725625},
    {lat: 39.6053831, lng: -77.7350971},
    {lat: 39.6060942, lng: -77.7462062},
    {lat: 39.6066982, lng: -77.7528391},
    {lat: 39.6128637, lng: -77.7825443},
    {lat: 39.6214059, lng: -77.7892863},
    {lat: 39.6285292, lng: -77.80548},
    {lat: 39.6335277, lng: -77.8144931},
    {lat: 39.653166, lng: -77.9176649},
    {lat: 39.6497432, lng: -77.9294454},
    {lat: 39.6255471, lng: -78.0124957},
    {lat: 39.6318004, lng: -78.0211887},
    {lat: 39.657949, lng: -78.0555651},
    {lat: 39.6801836, lng: -78.0937298},
    {lat: 39.6920541, lng: -78.1347199},
    {lat: 39.6943917, lng: -78.1454587},
    {lat: 39.7065893, lng: -78.1803443},
    {lat: 39.7102781, lng: -78.1853389},
    {lat: 39.7120703, lng: -78.1864718},
    {lat: 39.7170685, lng: -78.1872282},
    {lat: 39.7331921, lng: -78.1819369},
    {lat: 39.7406409, lng: -78.1811788},
    {lat: 39.7551362, lng: -78.1864314},
    {lat: 39.7589192, lng: -78.1916389},
    {lat: 39.7987152, lng: -78.2439241},
    {lat: 39.798776, lng: -78.244629},
    {lat: 39.8840979, lng: -78.2436762},
    {lat: 39.8848174, lng: -78.2439063},
    {lat: 39.9493794, lng: -78.2318231},
    {lat: 39.9504654, lng: -78.2348028},
    {lat: 39.977016, lng: -78.244904},
    {lat: 39.9988207, lng: -78.2388923},
    {lat: 39.9994282, lng: -78.2378599},
    {lat: 39.9993687, lng: -78.2343849},
    {lat: 39.9986986, lng: -78.2337104},
    {lat: 39.9890189, lng: -78.2549959},
    {lat: 39.986811, lng: -78.261116},
    {lat: 40.028459, lng: -78.487693},
    {lat: 40.03225, lng: -78.495429},
    {lat: 40.0482196, lng: -78.5090015},
    {lat: 40.050082, lng: -78.517024},
    {lat: 39.9983015, lng: -79.0402757},
    {lat: 40.0016091, lng: -79.0491124},
    {lat: 40.0205815, lng: -79.0816095},
    {lat: 40.0251092, lng: -79.0895056},
    {lat: 40.1218549, lng: -79.3171817},
    {lat: 40.1097753, lng: -79.3822645},
    {lat: 40.1120977, lng: -79.387599},
    {lat: 40.2037503, lng: -79.5628951},
    {lat: 40.2075065, lng: -79.5720704},
    {lat: 40.2207358, lng: -79.6034529},
    {lat: 40.2259472, lng: -79.6089664},
    {lat: 40.3087728, lng: -79.6759349},
    {lat: 40.31126, lng: -79.6780493},
    {lat: 40.4343436, lng: -79.7480451},
    {lat: 40.4358769, lng: -79.749004},
    {lat: 40.5394532, lng: -79.8228098},
    {lat: 40.5466697, lng: -79.8240807},
    {lat: 40.6084173, lng: -79.9453584},
    {lat: 40.6096533, lng: -79.9485985},
    {lat: 40.6740501, lng: -80.1015187},
    {lat: 40.6810405, lng: -80.1052955},
    {lat: 40.813054, lng: -80.3227116},
    {lat: 40.8142043, lng: -80.3250703},
    {lat: 40.8345722, lng: -80.3722582},
    {lat: 40.8402531, lng: -80.3837545},
    {lat: 40.938673, lng: -80.5820515},
    {lat: 40.9403652, lng: -80.5904852},
    {lat: 40.954278, lng: -80.6375238},
    {lat: 40.9647764, lng: -80.6519348},
    {lat: 40.967461, lng: -80.655533},
    {lat: 41.1104589, lng: -80.8380854},
    {lat: 41.1168874, lng: -80.8431609},
    {lat: 41.135497, lng: -80.866945},
    {lat: 41.1538696, lng: -80.8957492},
    {lat: 41.2158649, lng: -80.9511831},
    {lat: 41.218526, lng: -80.954191},
    {lat: 41.2436022, lng: -81.1716831},
    {lat: 41.2436551, lng: -81.1801754},
    {lat: 41.245017, lng: -81.233145},
    {lat: 41.245498, lng: -81.242228},
    {lat: 41.255855, lng: -81.359692},
    {lat: 41.2563932, lng: -81.3650468},
    {lat: 41.2578431, lng: -81.4893685},
    {lat: 41.258687, lng: -81.496779},
    {lat: 41.2680307, lng: -81.6176436},
    {lat: 41.271855, lng: -81.623588},
    {lat: 41.2904254, lng: -81.6677964},
    {lat: 41.2929637, lng: -81.6764119},
    {lat: 41.3322596, lng: -81.8145469},
    {lat: 41.3351729, lng: -81.8211273},
    {lat: 41.377589, lng: -81.984858},
    {lat: 41.379311, lng: -81.993265},
    {lat: 41.379354, lng: -82.003025},
    {lat: 41.385307, lng: -82.105665},
    {lat: 41.389003, lng: -82.114869},
    {lat: 41.388818, lng: -82.170375},
    {lat: 41.3837448, lng: -82.1928246},
    {lat: 41.3824319, lng: -82.2009704},
    {lat: 41.380182, lng: -82.214953},
    {lat: 41.3777823, lng: -82.2306027},
    {lat: 41.36213, lng: -82.279948},
    {lat: 41.357943, lng: -82.290544},
    {lat: 41.3241416, lng: -82.6026413},
    {lat: 41.32298, lng: -82.6140705},
    {lat: 41.3404984, lng: -82.7610805},
    {lat: 41.341426, lng: -82.768606},
    {lat: 41.367355, lng: -82.95264},
    {lat: 41.3699467, lng: -82.9629979},
    {lat: 41.400248, lng: -83.108164},
    {lat: 41.402431, lng: -83.115713},
    {lat: 41.457926, lng: -83.283189},
    {lat: 41.462155, lng: -83.291415},
    {lat: 41.4882652, lng: -83.3638011},
    {lat: 41.4924389, lng: -83.3730456},
    {lat: 41.5229408, lng: -83.4550356},
    {lat: 41.5257653, lng: -83.4625075},
    {lat: 41.564857, lng: -83.57156},
    {lat: 41.56877, lng: -83.579917},
    {lat: 41.5920079, lng: -83.6645367},
    {lat: 41.5921126, lng: -83.6732334},
    {lat: 41.5988833, lng: -83.7967745},
    {lat: 41.6013104, lng: -83.8051658},
    {lat: 41.59189, lng: -84.043359},
    {lat: 41.591671, lng: -84.054536},
    {lat: 41.5931019, lng: -84.1353769},
    {lat: 41.593958, lng: -84.144803},
    {lat: 41.591974, lng: -84.315166},
    {lat: 41.591755, lng: -84.320116},
    {lat: 41.6044, lng: -84.402565},
    {lat: 41.604777, lng: -84.413053},
    {lat: 41.613495, lng: -84.542511},
    {lat: 41.6143004, lng: -84.551279},
    {lat: 41.6294104, lng: -84.7566959},
    {lat: 41.6301693, lng: -84.7726901},
    {lat: 41.705476, lng: -84.9275826},
    {lat: 41.7356308, lng: -84.9879757},
    {lat: 41.7357059, lng: -84.9958143},
    {lat: 41.744868, lng: -85.324376},
    {lat: 41.7473054, lng: -85.3332594},
    {lat: 41.7539557, lng: -85.4279492},
    {lat: 41.7537078, lng: -85.438861},
    {lat: 41.749971, lng: -85.6612736},
    {lat: 41.7480064, lng: -85.6712182},
    {lat: 41.7472847, lng: -85.682113},
    {lat: 41.7472177, lng: -85.6901517},
    {lat: 41.7353611, lng: -85.7849573},
    {lat: 41.7350722, lng: -85.794126},
    {lat: 41.7309037, lng: -85.8794217},
    {lat: 41.7303521, lng: -85.8888657},
    {lat: 41.731037, lng: -85.9635382},
    {lat: 41.7310457, lng: -85.9718786},
    {lat: 41.7322791, lng: -86.0002542},
    {lat: 41.7322976, lng: -86.0098346},
    {lat: 41.7335186, lng: -86.1353309},
    {lat: 41.7306805, lng: -86.1442776},
    {lat: 41.722743, lng: -86.255124},
    {lat: 41.7226703, lng: -86.2627758},
    {lat: 41.7305336, lng: -86.327329},
    {lat: 41.730498, lng: -86.33399},
    {lat: 41.7094466, lng: -86.6187877},
    {lat: 41.7036534, lng: -86.6263841},
    {lat: 41.6682411, lng: -86.7270605},
    {lat: 41.6651342, lng: -86.7343305},
    {lat: 41.5909124, lng: -86.8960722},
    {lat: 41.5891751, lng: -86.9063777},
    {lat: 41.587194, lng: -86.9198682},
    {lat: 41.5857455, lng: -86.9301162},
    {lat: 41.5736796, lng: -87.047503},
    {lat: 41.5747177, lng: -87.0552306},
    {lat: 41.5802651, lng: -87.1738532},
    {lat: 41.5803679, lng: -87.1823639},
    {lat: 41.5868707, lng: -87.2118715},
    {lat: 41.5894944, lng: -87.2217368},
    {lat: 41.591702, lng: -87.228396},
    {lat: 41.5930036, lng: -87.2413621},
    {lat: 41.5866578, lng: -87.3014999},
    {lat: 41.5955234, lng: -87.3052721},
    {lat: 41.603726, lng: -87.3296037},
    {lat: 41.6060651, lng: -87.3424464},
    {lat: 41.6089316, lng: -87.3544822},
    {lat: 41.6091864, lng: -87.3614145},
    {lat: 41.608687, lng: -87.4121645},
    {lat: 41.6102426, lng: -87.4273809},
    {lat: 41.6357596, lng: -87.5059009},
    {lat: 41.6434826, lng: -87.5072147},
    {lat: 41.65958, lng: -87.5168217},
    {lat: 41.6939505, lng: -87.5218403},
    {lat: 41.7095154, lng: -87.5309625},
    {lat: 41.7309966, lng: -87.5594484},
    {lat: 41.7355078, lng: -87.5659479},
    {lat: 41.7465282, lng: -87.5811363},
    {lat: 41.7602729, lng: -87.6002362},
    {lat: 41.7657445, lng: -87.6078483},
    {lat: 41.774621, lng: -87.620232},
    {lat: 41.7750452, lng: -87.6234504},
    {lat: 41.7773103, lng: -87.6296295},
    {lat: 41.7985977, lng: -87.6311159},
    {lat: 41.8159305, lng: -87.6301095},
    {lat: 41.8386308, lng: -87.6306674},
    {lat: 41.8454399, lng: -87.6344876},
    {lat: 41.8462074, lng: -87.6377447},
    {lat: 41.8504909, lng: -87.6447064},
    {lat: 41.8556781, lng: -87.6444007},
    {lat: 41.8625293, lng: -87.6443209},
    {lat: 41.8636002, lng: -87.6443635},
    {lat: 41.8663039, lng: -87.6444482},
    {lat: 41.8731754, lng: -87.6448563},
    {lat: 41.8733307, lng: -87.6448696},
    {lat: 41.8783769, lng: -87.6456906},
    {lat: 41.8788384, lng: -87.6456599},
    {lat: 41.883642, lng: -87.6456443},
    {lat: 41.8838828, lng: -87.6456544},
    {lat: 41.886419, lng: -87.6461014},
    {lat: 41.8905974, lng: -87.6500478},
    {lat: 41.8951806, lng: -87.6567233},
    {lat: 41.8967333, lng: -87.6583964},
    {lat: 41.8972515, lng: -87.6587832},
    {lat: 41.900116, lng: -87.6601936},
    {lat: 41.9058724, lng: -87.6608704},
    {lat: 41.9079512, lng: -87.6622265},
    {lat: 41.9127039, lng: -87.6660572},
    {lat: 41.9157386, lng: -87.6679734},
    {lat: 41.9196722, lng: -87.673174},
    {lat: 41.9208312, lng: -87.675191},
    {lat: 41.9226763, lng: -87.6784384},
    {lat: 41.9278343, lng: -87.6875041},
    {lat: 41.929581, lng: -87.6905954},
    {lat: 41.935999, lng: -87.7015987},
    {lat: 41.9361372, lng: -87.7018445},
    {lat: 41.9373438, lng: -87.7040013},
    {lat: 41.9394956, lng: -87.7080025},
    {lat: 41.9426982, lng: -87.7155908},
    {lat: 41.9430445, lng: -87.7159807},
    {lat: 41.9481464, lng: -87.7198948},
    {lat: 41.9500789, lng: -87.7237913},
    {lat: 41.9566766, lng: -87.7354381},
    {lat: 41.9567778, lng: -87.7356175},
    {lat: 41.9576798, lng: -87.7372399},
    {lat: 41.9586939, lng: -87.7390359},
    {lat: 41.9609984, lng: -87.7426331},
    {lat: 41.9660838, lng: -87.7524793},
    {lat: 41.9695069, lng: -87.7583779},
    {lat: 41.9721883, lng: -87.7654334},
    {lat: 41.973932, lng: -87.7686633},
    {lat: 41.9772032, lng: -87.7744388},
    {lat: 41.9810569, lng: -87.7812421},
    {lat: 41.9825776, lng: -87.7927379},
    {lat: 41.982555, lng: -87.7951595},
    {lat: 41.9825049, lng: -87.8015046},
    {lat: 41.98243, lng: -87.8117364},
    {lat: 41.9834316, lng: -87.8178229},
    {lat: 41.9842745, lng: -87.8237652},
    {lat: 41.983951, lng: -87.8491983},
    {lat: 41.9884844, lng: -87.8638251},
    {lat: 41.9945181, lng: -87.8731694},
    {lat: 41.9965176, lng: -87.8752236},
    {lat: 42.000893, lng: -87.8836805},
    {lat: 42.0035765, lng: -87.8895357},
    {lat: 42.0147894, lng: -87.9257187},
    {lat: 42.0203464, lng: -87.9506173},
    {lat: 42.0380065, lng: -87.9779016},
    {lat: 42.0458918, lng: -87.9948619},
    {lat: 42.055315, lng: -88.0162317},
    {lat: 42.0586921, lng: -88.0361918},
    {lat: 42.0609779, lng: -88.0548467},
    {lat: 42.0621331, lng: -88.0643061},
    {lat: 42.0628551, lng: -88.0702512},
    {lat: 42.0650693, lng: -88.0883386},
    {lat: 42.0667081, lng: -88.1328541},
    {lat: 42.0666822, lng: -88.1541681},
    {lat: 42.0666871, lng: -88.1843209},
    {lat: 42.0666911, lng: -88.192135},
    {lat: 42.0666571, lng: -88.1995958},
    {lat: 42.0666636, lng: -88.2138533},
    {lat: 42.0666677, lng: -88.2542602},
    {lat: 42.0666719, lng: -88.2590539},
    {lat: 42.0666269, lng: -88.2855115},
    {lat: 42.0673225, lng: -88.2910981},
    {lat: 42.0675183, lng: -88.2920944},
    {lat: 42.068463, lng: -88.2967779},
    {lat: 42.0688321, lng: -88.2987565},
    {lat: 42.0718656, lng: -88.3139136},
    {lat: 42.0784498, lng: -88.3298994},
    {lat: 42.0831462, lng: -88.340681},
    {lat: 42.1167553, lng: -88.421238},
    {lat: 42.1253921, lng: -88.4389974},
    {lat: 42.1436223, lng: -88.5104661},
    {lat: 42.1459042, lng: -88.5187698},
    {lat: 42.1753428, lng: -88.6108871},
    {lat: 42.1777926, lng: -88.6178722},
    {lat: 42.233932, lng: -88.80859},
    {lat: 42.233886, lng: -88.816659},
    {lat: 42.233781, lng: -88.829818},
    {lat: 42.233711, lng: -88.839167},
    {lat: 42.23362, lng: -88.847988},
    {lat: 42.2335327, lng: -88.8590087},
    {lat: 42.2332601, lng: -88.8930651},
    {lat: 42.2352134, lng: -88.9099148},
    {lat: 42.2472233, lng: -88.9556217},
    {lat: 42.24589, lng: -88.9620994},
    {lat: 42.2432024, lng: -88.9636154},
    {lat: 42.2396485, lng: -88.9657851},
    {lat: 42.2386701, lng: -88.9665629},
    {lat: 42.2357111, lng: -88.9696181},
    {lat: 42.220283, lng: -88.996653},
    {lat: 42.2203006, lng: -89.0097495},
    {lat: 42.2201293, lng: -89.024091},
    {lat: 42.2200065, lng: -89.0326731},
    {lat: 42.2196742, lng: -89.0672046},
    {lat: 42.2196844, lng: -89.0714232},
    {lat: 42.2196736, lng: -89.0731949},
    {lat: 42.2196041, lng: -89.0778377},
    {lat: 42.2195814, lng: -89.1032113},
    {lat: 42.2195089, lng: -89.1139611},
    {lat: 42.2418011, lng: -89.1390186},
    {lat: 42.2488047, lng: -89.1431785}]