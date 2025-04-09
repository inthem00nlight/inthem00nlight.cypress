describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('USER_LOGIN');
         cy.get('#pass').type('USER_PASSWORD');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('USER_LOGIN');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    
    it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('USER_LOGIN');
         cy.get('#pass').type('USER_PASSWORD');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('USER_LOGIN');
    cy.get('#pass').type('USER_PASSWORD');
    cy.get('#loginButton').click();
    cy.get('#message').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
it('Логин без @ и верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('USER_LOGIN');
    cy.get('#pass').type('USER_PASSWORD');
    cy.get('#loginButton').click();
    cy.get('#message').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('USER_LOGIN');
    cy.get('#pass').type('USER_PASSWORD');
    cy.get('#loginButton').click();
    cy.get('#message').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
})
describe('Покупка нового аватара', function () {

    it('e2e', function () {
         cy.visit('https://pokemonbattle.ru/login/');
         cy.get('#k_email').type('USER_LOGIN');
         cy.get('#k_password').type('USER_PASSWORD');
         cy.get('.MuiButton-root').click();
         cy.get('.header_card_trainer').click();
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();
         cy.get('.available > button').first().click(); 
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111');
         cy.get(':nth-child(1) > .style_1_base_input').type('1234');
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125')
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('GERMAN DOLNIKOV');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.style_1_base_input').type('56456');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.payment_form_card_form').contains('Покупка прошла успешно');





         
     })
    })