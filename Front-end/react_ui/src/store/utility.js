export const updateObject = (oldObject, updatedProperties) => {
    return {

        // rerturns an object
        // updates oldObject properties with propertise from updatedProperties, of same keys
        ...oldObject,
        ...updatedProperties
    }
}