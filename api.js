/* ---------------------------------------
   APNA BAZAR SELLER - API Service Layer
   All backend communication lives here
   --------------------------------------- */

console.log('api.js START');

try {

const BASE_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api'
    : 'https://seller.apnabazarmart.in/api';

// Token Management
const Auth = {
  getToken() {
    return localStorage.getItem('ab_seller_token') || localStorage.getItem('token');
  },
  setToken(token) {
    localStorage.setItem('ab_seller_token', token);
  },
  removeToken() {
    localStorage.removeItem('ab_seller_token');
  },
  isLoggedIn() {
    return !!this.getToken();
  }
};

// Base Fetch Wrapper
async function apiFetch(path, options = {}) {
  const token = Auth.getToken();
  const requestUrl = `${BASE_URL}${path}`;

  const isFormData = options.body instanceof FormData;

  const headers = {
    ...(!isFormData && { 'Content-Type': 'application/json' }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers
  };

  const res = await fetch(requestUrl, {
    ...options,
    headers
  });

  const contentType = res.headers.get('content-type') || '';
  const responseText = await res.text();
  let data = null;

  if (responseText) {
    try {
      data = JSON.parse(responseText);
    } catch (error) {
      data = null;
    }
  }

  if (!res.ok) {
    if (data && typeof data === 'object') {
      throw new Error(data.message || data.error || 'Something went wrong');
    }

    if (!contentType.includes('application/json') || responseText.trim().startsWith('<')) {
      throw new Error(`Upload failed (${res.status}). Please try again.`);
    }

    throw new Error(responseText || 'Something went wrong');
  }

  if (data && typeof data === 'object') {
    return data;
  }

  if (responseText) {
    return {
      success: true,
      data: responseText
    };
  }

  return {
    success: true,
    data: null
  };
}

// ══════════════════════════════
// AUTH APIs
// ══════════════════════════════

const SellerAPI = {

  // Send OTP
  async sendOtp(phone) {
    return apiFetch('/auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ phone })
    });
  },

  // Verify OTP — returns { token, seller }
  async verifyOtp(phone, otp) {
    return apiFetch('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ phone, otp })
    });
  },

  // Get logged-in seller profile
  async getMe() {
    return apiFetch('/sellers/me');
  },

  // Complete / update shop profile
  async updateProfile(data) {
    return apiFetch('/sellers/me', {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  },

  // Verify shop profile / documents
  async verifySeller(formData) {
    return apiFetch('/sellers/verify', {
      method: 'POST',
      body: formData
    });
  }
};

// ══════════════════════════════
// PRODUCT APIs
// ══════════════════════════════

const ProductAPI = {

  // Get all products for logged-in seller
  async getMyProducts() {
    return apiFetch('/products');
  },

  // Add new product (FormData with images + colors)
  async addProduct(formData) {
    return apiFetch('/products', {
      method: 'POST',
      body: formData
    });
  },

  // Update product (FormData with changed fields + new images only)
  async updateProduct(productId, formData) {
    return apiFetch(`/products/${productId}`, {
      method: 'PATCH',
      body: formData
    });
  },

  // Delete product
  async deleteProduct(productId) {
    return apiFetch(`/products/${productId}`, {
      method: 'DELETE'
    });
  }
};

// ══════════════════════════════
// ORDER APIs
// ══════════════════════════════

const OrderAPI = {

  // Get orders for logged-in seller
  async getMyOrders() {
    return apiFetch('/orders');
  },

  // Accept order
  async acceptOrder(orderId) {
    return apiFetch(`/orders/${orderId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'seller_confirmed' })
    });
  },

  // Reject order
  async rejectOrder(orderId) {
    return apiFetch(`/orders/${orderId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'seller_rejected' })
    });
  }
};

console.log('SellerAPI inside api.js:', typeof SellerAPI);
console.log('Before attach:', window.SellerAPI);

window.Auth = Auth;
window.SellerAPI = SellerAPI;
window.ProductAPI = ProductAPI;
window.OrderAPI = OrderAPI;

console.log('After attach:', window.SellerAPI);
console.log('api.js END');
} catch (err) {
  console.error('api.js crashed:', err);
}
