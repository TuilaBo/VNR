// Chatbase API service
const CHATBASE_API_URL = 'https://www.chatbase.co/api/v1/chat';
const API_KEY = '00148c96-b6f5-447a-9f70-4f4b18bd82cb';
const BOT_ID = 'wQ-Pb5pp80DEhKVfP4mTE';

// Alternative endpoints to try
const ALTERNATIVE_ENDPOINTS = [
  'https://www.chatbase.co/api/v1/chat',
  'https://api.chatbase.co/v1/chat',
  'https://www.chatbase.co/api/chat'
];

export const sendMessageToChatbase = async (message, conversationId = null) => {
  // Try different request formats
  const requestFormats = [
    // Format 1: Simple message format
    {
      message: message,
      chatbotId: BOT_ID,
      stream: false
    },
    // Format 2: Messages array format
    {
      messages: [{ role: 'user', content: message }],
      chatbotId: BOT_ID,
      stream: false
    },
    // Format 3: Query format
    {
      query: message,
      chatbotId: BOT_ID,
      stream: false
    }
  ];

  for (let i = 0; i < requestFormats.length; i++) {
    try {
      const requestBody = { ...requestFormats[i] };
      
      // Add conversationId if provided
      if (conversationId) {
        requestBody.conversationId = conversationId;
      }

      console.log(`Trying format ${i + 1}:`, {
        url: CHATBASE_API_URL,
        body: requestBody
      });

      const response = await fetch(CHATBASE_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log(`Format ${i + 1} response status:`, response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Chatbase API Success Response:', data);
        
        return {
          success: true,
          message: data.text || data.message || data.reply || data.answer || data.response || 'Không có phản hồi từ AI',
          conversationId: data.conversationId || conversationId
        };
      } else {
        const errorText = await response.text();
        console.log(`Format ${i + 1} failed:`, response.status, errorText);
        
        // If this is the last format, throw error
        if (i === requestFormats.length - 1) {
          throw new Error(`All formats failed. Last error: HTTP ${response.status}, ${errorText}`);
        }
      }
    } catch (error) {
      console.log(`Format ${i + 1} error:`, error.message);
      
      // If this is the last format, return error
      if (i === requestFormats.length - 1) {
        return {
          success: false,
          message: 'Xin lỗi, có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.',
          error: error.message
        };
      }
    }
  }
};

export const getInitialGreeting = () => {
  return {
    success: true,
    message: "Xin chào! Bạn có câu hỏi nào về lịch sử, đặc biệt là về Chiến dịch Điện Biên Phủ không? Mình rất sẵn lòng giúp đỡ!",
    conversationId: null
  };
};
