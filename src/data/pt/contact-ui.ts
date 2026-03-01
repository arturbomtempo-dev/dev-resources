export const contactUI = {
    title: 'Contato',
    subtitle: 'Entre em contato conosco caso tenha interesse em fazer projetos ou dar sugestões',
    socialButtons: {
        linkedin: 'LinkedIn',
        email: 'Email',
        github: 'GitHub',
    },
    form: {
        name: {
            label: 'Nome',
            placeholder: 'Digite seu nome...',
        },
        email: {
            label: 'Email',
            placeholder: 'seu@email.com',
        },
        subject: {
            label: 'Assunto',
            placeholder: 'Informe o assunto..',
        },
        message: {
            label: 'Mensagem',
            placeholder: 'Escreva uma mensagem...',
        },
        submit: 'Enviar',
        sending: 'Enviando...',
    },
    toast: {
        fillAllFields: 'Preencha todos os campos antes de enviar.',
        invalidEmail: 'Digite um email válido.',
        success: 'Mensagem enviada com sucesso! Em breve entraremos em contato.',
        confirmationWarning: 'Não conseguimos disparar o e-mail de confirmação para você agora.',
        error: 'Não foi possível enviar sua mensagem. Tente novamente em instantes.',
    },
};

export type ContactUITranslations = typeof contactUI;
