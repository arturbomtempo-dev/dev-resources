export const guestbookUI = {
    title: 'Livro de Visitas',
    subtitle: 'Deixe sua mensagem e faça parte da nossa história',
    form: {
        name: {
            label: 'Nome',
            placeholder: 'Digite seu nome...',
        },
        message: {
            label: 'Mensagem',
            placeholder: 'Deixe sua mensagem...',
        },
        submit: 'Enviar mensagem',
        submitting: 'Enviando...',
    },
    toast: {
        fillAllFields: 'Preencha todos os campos antes de enviar.',
        success: 'Mensagem enviada com sucesso! Obrigado por deixar sua marca.',
        error: 'Não foi possível enviar sua mensagem. Tente novamente.',
    },
    entries: {
        title: 'Mensagens',
        empty: 'Seja o primeiro a deixar uma mensagem!',
        loading: 'Carregando mensagens...',
        error: 'Erro ao carregar mensagens.',
    },
};

export type GuestbookUITranslations = typeof guestbookUI;
