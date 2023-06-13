describe('Testes e2e Novo Requerimento', () => {
  const novoReq = () =>{
    cy.visit('/')
    cy.get('a[href*="requerimentos"]').click();
    cy.get('.btn').click();
  }
  it('Não salva se a area "argumentação" estiver vazia', () => {
    novoReq();
    cy.get('#inputDisciplina').select('ADS030 - Manutenção de Software e DevOps')
    cy.get('#inputProva').select('A1')
    cy.get('.btn-danger').click()
    cy.get('#inputArgumentacao').should('be.empty')
  })
  it('Não salva se o select "prova" estiver vazio', () => {
    novoReq();
    cy.get('#inputDisciplina').select('ADS030 - Manutenção de Software e DevOps')
    cy.get('#inputProva').select('')
    cy.get('#inputArgumentacao').type('argumentação aqui')
    cy.get('.btn-danger').click()
    cy.get('#inputProva').should('have.value','')
  })
  it('Não salva se o select "disciplina" estiver vazio', () => {
    novoReq();
    cy.get('#inputDisciplina').select('')
    cy.get('#inputProva').select('A1')
    cy.get('#inputArgumentacao').type('argumentação aqui')
    cy.get('.btn-danger').click()
    cy.get('#inputDisciplina').should('have.value','')
  })
  it('O botão "desistir" volta para a página anterior', () => {
    novoReq();
    cy.get('.btn-light').click()
    cy.get('.btn').should('have.text','Novo')
  })
})