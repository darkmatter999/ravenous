/* Client ID & API Key Information
Client ID
kdiVMPXJQVhN_YlKRg7tFw

API Key
s1PjZV6vJhXWAjvr3eDKC9xnP2_LCvg--vDarBOmDMbLYytuFUdjHK4QRIUXU6MUYI-18mzYaPSbqR8RpI6RY5t2fZw4ktwag8Qa_QojufLngpSxOAYll004HWMbXnYx
*/

const apiKey = "s1PjZV6vJhXWAjvr3eDKC9xnP2_LCvg--vDarBOmDMbLYytuFUdjHK4QRIUXU6MUYI-18mzYaPSbqR8RpI6RY5t2fZw4ktwag8Qa_QojufLngpSxOAYll004HWMbXnYx";

//added a 'limit' (of 10 results) to the number of displayed results. Default with Yelp is 20.
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=10`,
        { headers: {Authorization: `Bearer ${apiKey}`}
    })
    .then((response) => {
        return response.json()
    })
    .then((jsonResponse) => {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(((business) => {
                console.log(jsonResponse);
                console.log(business);
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }
            }))
        }
    })
    

}};

export default Yelp;


    
        
