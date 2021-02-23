export const state = () => ({
  authors: [
    {
      id: 1,
      name: '第一个作者',
      username: '1',
      email: '111111111.qq.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: [Object]
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    },
    {
      id: 2,
      name: '第二个作者',
      username: '2',
      email: '222222222.qq.com',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: [Object]
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      }
    }
  ],
  author: null
})

export const mutations = {
  SET_AUTHORS(state, authors) {
    state.authors = authors
  },
  SET_AUTHOR(state, author) {
    state.author = author
  }
}

export const actions = {
  fetchAuthors({ commit, state }) {
    if (state.authors.length > 0) {
      return state.authors
    }
  },
  fetchAuthor({ commit, getters }, authorId) {
    const author = getters.getAuthorById(authorId)
    if (author) {
      commit('SET_AUTHOR', author)
      return author
    } else {
      return this.$axios.$get(`/users/${authorId}`).then((author) => {
        commit('SET_AUTHOR', author)
      })
    }
  }
}

export const getters = {
  getAuthorById: (state) => (id) =>
    state.authors.find((author) => author.id === id)
}
