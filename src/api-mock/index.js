const routes = [
  {
    method: 'GET',
    url: '/api/products',
    status: 200,
    response: {
      data: [
        {
          id: 'product-1',
          image: 'https://via.placeholder.com/200',
          title: 'Product 1',
          price: 'Rp.100.000'
        },
        {
          id: 'product-2',
          image: 'https://via.placeholder.com/200',
          title: 'Product 2',
          price: 'Rp.100.000'
        },
        {
          id: 'product-3',
          image: 'https://via.placeholder.com/200',
          title: 'Product 3',
          price: 'Rp.100.000'
        },
        {
          id: 'product-4',
          image: 'https://via.placeholder.com/200',
          title: 'Product 4',
          price: 'Rp.100.000'
        },
        {
          id: 'product-5',
          image: 'https://via.placeholder.com/200',
          title: 'Product 5',
          price: 'Rp.100.000'
        }
      ]
    }
  },

  //GET EACH PRODUCT DETAIL
  {
    method: 'GET',
    url: '/api/product/product-1',
    status: 200,
    response: {
      data: [
        {
          id: 'product-1',
          image: 'https://via.placeholder.com/200',
          title: 'Product 1',
          price: 'Rp.100.000',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Neque sodales ut etiam sit amet nisl. Porttitor lacus luctus accumsan tortor.'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/api/product/product-2',
    status: 200,
    response: {
      data: [
        {
          id: 'product-2',
          image: 'https://via.placeholder.com/200',
          title: 'Product 2',
          price: 'Rp.200.000',
          detail: 'Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Neque sodales ut etiam sit amet nisl. Porttitor lacus luctus accumsan tortor.'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/api/product/product-3',
    status: 200,
    response: {
      data: [
        {
          id: 'product-3',
          image: 'https://via.placeholder.com/200',
          title: 'Product 3',
          price: 'Rp.300.000',
          detail: 'Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Neque sodales ut etiam sit amet nisl. Porttitor lacus luctus accumsan tortor.'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/api/product/product-4',
    status: 200,
    response: {
      data: [
        {
          id: 'product-4',
          image: 'https://via.placeholder.com/200',
          title: 'Product 4',
          price: 'Rp.400.000',
          detail: 'Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Neque sodales ut etiam sit amet nisl. Porttitor lacus luctus accumsan tortor.'
        }
      ]
    }
  },
  {
    method: 'GET',
    url: '/api/product/product-5',
    status: 200,
    response: {
      data: [
        {
          id: 'product-5',
          image: 'https://via.placeholder.com/200',
          title: 'Product 5',
          price: 'Rp.500.000',
          detail: 'Lorem 5 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Neque sodales ut etiam sit amet nisl. Porttitor lacus luctus accumsan tortor.'
        }
      ]
    }
  }
]

export default routes
  