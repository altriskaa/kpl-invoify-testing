describe("5. Summary - Draw a signatture", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000"); // Pastikan server Next.js berjalan
        cy.contains('button','5. Summary')
            .dblclick()      
    })

    it("drawing a signature", () => {
      // VALIDASI signature modal terbuka
      cy.get("label").contains("Signature").click(); // Klik label untuk membuka modal
      cy.get('[role="dialog"]').should("be.visible"); // Pastikan modal terbuka

      // ACTION draw signature
      cy.get('[role="tab"]').contains("Draw").click(); // Pastikan tab "Draw" aktif
      cy.get('canvas').click() // Interaksi dengan canvas tanda tangan dengan klik
      cy.contains("Done").click(); // Klik tombol "Done" untuk menyimpan tanda tangan

      // VALIDASI signature terisi
      cy.get('[role="dialog"]').should("not.exist"); // Pastikan modal tertutup

    });

});
