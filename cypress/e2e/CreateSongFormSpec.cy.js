describe('CreateSongForm individual fields', () => {

  describe('title input', () => {
    it('sets the title of the song to be user input', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="song-title"]')
      .type("test title")
      .should('have.value', 'test title')
    });
  });

  describe('artist input', () => {
    it('sets the artist of the song to be user input', () => {
      cy.get('[data-cy="song-artist"]')
      .type("test artist")
      .should('have.value', 'test artist')
    });
  });

  describe('album input', () => {
    it('sets the album of the song to be user input', () => {
      cy.get('[data-cy="song-album"]')
      .type("test album")
      .should('have.value', 'test album')
    });
  });

  describe('date input', () => {
    it('sets the date of the song to be user input', () => {
      cy.get('[data-cy="song-date"]')
      .type("2022-10-28")
      .should('have.value', '2022-10-28')
    });
  });

  describe('genre input', () => {
    it('sets the genre of the song to be user input', () => {
      cy.get('[data-cy="song-genre"]')
      .type("test genre")
      .should('have.value', 'test genre')
    });
  });

  describe('Add song button', () => {
    it.skip('clicks "Add Song" to create a new song in the music library', () => {
      cy.get('[data-cy="add-song-btn"]')
      .click()
    })
  })

})
