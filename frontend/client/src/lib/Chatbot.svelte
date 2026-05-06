<script>
	let chatOpen = false;
	let chatMessages = [
		{ type: 'bot', text: 'Hello! Welcome to TPC Malawi. How can I assist you with your property needs today?' }
	];
	let currentMessage = '';

	function toggleChat() {
		chatOpen = !chatOpen;
	}

	function sendMessage() {
		if (!currentMessage.trim()) return;
		
		// Add user message
		chatMessages = [...chatMessages, { type: 'user', text: currentMessage }];
		const userMessage = currentMessage;
		currentMessage = '';
		
		// Simulate bot response
		setTimeout(() => {
			const botResponse = getBotResponse(userMessage);
			chatMessages = [...chatMessages, { type: 'bot', text: botResponse }];
		}, 1000);
	}

	function getBotResponse(message) {
		const lowerMessage = message.toLowerCase();
		
		if (lowerMessage.includes('property') || lowerMessage.includes('valuation')) {
			return 'We offer comprehensive property valuation services. Our expert team provides accurate assessments for residential, commercial, and industrial properties across Malawi.';
		} else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
			return 'You can reach us at +265 888 141 612 or +265 995 700 234. Our email is tpcmalawi@gmail.com. Visit our office at Reunion House, Office No. 22, Blantyre.';
		} else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
			return 'Our pricing varies based on the service and property type. Please fill out the contact form or call us for a personalized quote.';
		} else if (lowerMessage.includes('service')) {
			return 'We offer: Property Valuations, Plant & Machinery Valuations, Asset Tagging & Tracking, and Property Management services.';
		} else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
			return 'Hello! Welcome to TPC Malawi. How can I assist you with your property needs today?';
		} else {
			return 'Thank you for your message! For specific inquiries, please use the contact form or call us directly. We\'ll respond promptly to your needs.';
		}
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
	}
</script>

<div class="chatbot-container" class:open={chatOpen}>
	<div class="chatbot-toggle" on:click={toggleChat} aria-label="Toggle chat">
		<span class="chat-icon">💬</span>
		<span class="chat-close">✕</span>
	</div>
	
	<div class="chatbot-window">
		<div class="chatbot-header">
			<div class="chatbot-title">
				<span class="chatbot-avatar">🤖</span>
				<div>
					<h4>TPC Assistant</h4>
					<span class="online-indicator">● Online</span>
				</div>
			</div>
		</div>
		
		<div class="chatbot-messages">
			{#each chatMessages as message, i}
				<div class="message" class:user={message.type === 'user'} class:bot={message.type === 'bot'}>
					<div class="message-content">
						{message.text}
					</div>
				</div>
			{/each}
		</div>
		
		<div class="chatbot-input">
			<input 
				type="text" 
				placeholder="Ask about our services..." 
				bind:value={currentMessage}
				on:keypress={handleKeyPress}
			/>
			<button on:click={sendMessage} disabled={!currentMessage.trim()} aria-label="Send message">
				→
			</button>
		</div>
	</div>
</div>

<style>
	.chatbot-container {
		position: fixed;
		bottom: 30px;
		right: 30px;
		z-index: 1000;
	}

	.chatbot-toggle {
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, #93c750, #7fb54c);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 4px 20px rgba(147, 199, 80, 0.4);
		transition: all 0.3s ease;
		position: relative;
		border: none;
	}

	.chatbot-toggle:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 30px rgba(147, 199, 80, 0.6);
	}

	.chat-icon {
		color: white;
		font-size: 1.5rem;
		transition: all 0.3s ease;
	}

	.chat-close {
		color: white;
		font-size: 1.2rem;
		position: absolute;
		opacity: 0;
		transform: scale(0);
		transition: all 0.3s ease;
	}

	.chatbot-container.open .chat-icon {
		opacity: 0;
		transform: scale(0);
	}

	.chatbot-container.open .chat-close {
		opacity: 1;
		transform: scale(1);
	}

	.chatbot-window {
		position: absolute;
		bottom: 80px;
		right: 0;
		width: 350px;
		height: 500px;
		background: white;
		border-radius: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		opacity: 0;
		transform: scale(0.8) translateY(20px);
		visibility: hidden;
		transition: all 0.3s ease;
		border: 1px solid rgba(147, 199, 80, 0.2);
	}

	.chatbot-container.open .chatbot-window {
		opacity: 1;
		transform: scale(1) translateY(0);
		visibility: visible;
	}

	.chatbot-header {
		padding: 1rem;
		background: linear-gradient(135deg, #93c750, #7fb54c);
		color: white;
		border-radius: 12px 12px 0 0;
	}

	.chatbot-title {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.chatbot-avatar {
		font-size: 1.5rem;
	}

	.chatbot-title h4 {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0;
	}

	.online-indicator {
		font-size: 0.875rem;
		color: #86efac;
	}

	.chatbot-messages {
		flex: 1;
		padding: 1rem;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.message {
		display: flex;
		max-width: 80%;
	}

	.message.bot {
		align-self: flex-start;
	}

	.message.user {
		align-self: flex-end;
	}

	.message-content {
		padding: 0.75rem 1rem;
		border-radius: 12px;
		font-size: 0.875rem;
		line-height: 1.4;
		word-wrap: break-word;
	}

	.message.bot .message-content {
		background: #f1f5f9;
		color: #1a1a1a;
		border-bottom-left-radius: 4px;
	}

	.message.user .message-content {
		background: linear-gradient(135deg, #93c750, #7fb54c);
		color: white;
		border-bottom-right-radius: 4px;
	}

	.chatbot-input {
		padding: 1rem;
		border-top: 1px solid #e2e8f0;
		display: flex;
		gap: 0.5rem;
	}

	.chatbot-input input {
		flex: 1;
		padding: 0.5rem 0.75rem;
		border: 1px solid #e2e8f0;
		border-radius: 20px;
		font-size: 0.875rem;
		outline: none;
		transition: all 0.3s ease;
	}

	.chatbot-input input:focus {
		border-color: #93c750;
		box-shadow: 0 0 0 3px rgba(147, 199, 80, 0.1);
	}

	.chatbot-input button {
		width: 36px;
		height: 36px;
		background: linear-gradient(135deg, #93c750, #7fb54c);
		color: white;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		font-weight: bold;
	}

	.chatbot-input button:hover:not(:disabled) {
		transform: scale(1.1);
		box-shadow: 0 4px 15px rgba(147, 199, 80, 0.4);
	}

	.chatbot-input button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
