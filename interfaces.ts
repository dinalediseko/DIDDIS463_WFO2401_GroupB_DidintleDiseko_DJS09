// Importing the LoyaltyUser enum from enums file
import { LoyaltyUser } from './enums'

// Importing the Price and Country types from types file
import { Price, Country } from './types'

// Interface for Review
export interface Review {
    name: string;            // The name of the reviewer
    stars: number;           // Rating given by the reviewer 
    loyaltyUser: LoyaltyUser; // Enum indicating the loyalty status of the reviewer
    date: string;            // Date when the review was posted
}

// Interface for Property
export interface Property {
    image: string;          // URL or path to the image of the property
    title: string;          // Name of the property
    price: Price;           // Price object containing details about the price of the property
    location: {             // Nested object for the property's location details
        firstLine: string;  // First line of the address
        city: string;       // City where the property is located
        code: number | string; // Postal code (can be a number or a string)
        country: Country;   // Country where the property is located
    }
    contact: [number, string]; // Tuple containing the contact phone number and email address
    isAvailable: boolean;    // Boolean indicating whether the property is currently available
}
