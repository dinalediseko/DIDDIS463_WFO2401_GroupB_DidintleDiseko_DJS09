// Select DOM elements for displaying review totals, returning user status, and username
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

// Import necessary enums and interfaces
import { LoyaltyUser, Permissions } from './enums'
import Review from './interfaces'

// Function to display the total number of reviews and the latest reviewer
export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    // Display a star icon for gold loyalty users
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : ''
    // Update the reviewTotalDisplay element with the number of reviews and last reviewer
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay    
}

// Function to populate the user display based on whether they are returning or new
export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

// Function to show details including the price if a condition is met
export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

// Function to add an 's' to the word 'review' if there are multiple reviews or none
export function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

// Function to get the top two reviews based on the number of stars
export function getTopTwoReviews(reviews: Review[]): Review[] {
    // Sort reviews by stars in descending order and return the top two
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}