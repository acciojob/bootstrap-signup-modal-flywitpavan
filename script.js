describe('Signup Modal Tests', () => {
    beforeEach(() => {
        cy.visit('/path/to/your/signup-page.html'); // Update with your actual path
    });

    it('should open and close the modal', () => {
        // Open the modal
        cy.get('button').first().click();

        // Check that the modal is visible
        cy.get('#signupModal').should('be.visible');

        // Close the modal
        cy.get('.btn-close').click(); // Ensure this class is correct

        // Verify that the modal is no longer visible
        cy.get('#signupModal').should('not.be.visible');
    });
});
