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

<div class="floating-actions">
	<!-- WhatsApp Button -->
	<a 
		href="https://wa.me/265888141612" 
		target="_blank" 
		rel="noopener noreferrer" 
		class="whatsapp-btn"
		aria-label="Contact on WhatsApp"
	>
		<span class="whatsapp-icon">
			<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
			</svg>
		</span>
		<span class="whatsapp-tooltip">Chat on WhatsApp</span>
	</a>

	<!-- Chatbot Container -->
	<div class="chatbot-container" class:open={chatOpen}>
		<button class="chatbot-toggle" on:click={toggleChat} aria-label="Toggle chat">
			<span class="chat-icon">💬</span>
			<span class="chat-close">✕</span>
			<span class="chat-tooltip">AI Assistant</span>
		</button>
		
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
</div>

<style>
	.floating-actions {
		position: fixed;
		bottom: 30px;
		right: 30px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		z-index: 1000;
		align-items: flex-end;
	}

	/* Common Button Styles */
	.whatsapp-btn, .chatbot-toggle {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		position: relative;
		border: none;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	}

	.whatsapp-btn:hover, .chatbot-toggle:hover {
		transform: scale(1.1) rotate(5deg);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}

	/* WhatsApp Specific */
	.whatsapp-btn {
		background: linear-gradient(135deg, #93c750, #7fb54c);
		color: white;
		text-decoration: none;
	}

	.whatsapp-btn:hover {
		box-shadow: 0 6px 20px rgba(147, 199, 80, 0.5);
	}

	.whatsapp-icon {
		display: flex;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% { transform: scale(1); }
		50% { transform: scale(1.1); }
		100% { transform: scale(1); }
	}

	/* Chatbot Specific */
	.chatbot-container {
		position: relative;
	}

	.chatbot-toggle {
		background: linear-gradient(135deg, #93c750, #7fb54c);
		color: white;
	}

	.chatbot-toggle:hover {
		box-shadow: 0 6px 20px rgba(147, 199, 80, 0.5);
	}

	.chat-icon {
		font-size: 1.5rem;
		transition: all 0.3s ease;
		animation: pulse 2s infinite;
	}

	.chat-close {
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

	/* Tooltips */
	.whatsapp-tooltip, .chat-tooltip {
		position: absolute;
		right: 75px;
		background: #1e293b;
		color: white;
		padding: 8px 15px;
		border-radius: 8px;
		font-size: 0.85rem;
		font-weight: 600;
		white-space: nowrap;
		opacity: 0;
		transform: translateX(10px);
		transition: all 0.3s ease;
		pointer-events: none;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.whatsapp-tooltip::after, .chat-tooltip::after {
		content: '';
		position: absolute;
		right: -6px;
		top: 50%;
		transform: translateY(-50%);
		border-left: 6px solid #1e293b;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
	}

	.whatsapp-btn:hover .whatsapp-tooltip, 
	.chatbot-toggle:hover .chat-tooltip {
		opacity: 1;
		transform: translateX(0);
	}

	/* Chat Window */
	.chatbot-window {
		position: absolute;
		bottom: 75px;
		right: 0;
		width: 350px;
		height: 500px;
		background: white;
		border-radius: 16px;
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		opacity: 0;
		transform: scale(0.9) translateY(20px);
		visibility: hidden;
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		border: 1px solid rgba(147, 199, 80, 0.2);
		overflow: hidden;
	}

	.chatbot-container.open .chatbot-window {
		opacity: 1;
		transform: scale(1) translateY(0);
		visibility: visible;
	}

	.chatbot-header {
		padding: 1.25rem;
		background: linear-gradient(135deg, #93c750, #7fb54c);
		color: white;
	}

	.chatbot-title {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.chatbot-avatar {
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
	}

	.chatbot-title h4 {
		font-size: 1.1rem;
		font-weight: 700;
		margin: 0;
	}

	.online-indicator {
		font-size: 0.8rem;
		color: #86efac;
		font-weight: 500;
	}

	.chatbot-messages {
		flex: 1;
		padding: 1.25rem;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: #f8fafc;
	}

	.message {
		display: flex;
		max-width: 85%;
	}

	.message.bot { align-self: flex-start; }
	.message.user { align-self: flex-end; }

	.message-content {
		padding: 0.75rem 1rem;
		border-radius: 15px;
		font-size: 0.9rem;
		line-height: 1.5;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
	}

	.message.bot .message-content {
		background: white;
		color: #1e293b;
		border-bottom-left-radius: 2px;
	}

	.message.user .message-content {
		background: linear-gradient(135deg, #93c750, #7fb54c);
		color: white;
		border-bottom-right-radius: 2px;
	}

	.chatbot-input {
		padding: 1rem;
		background: white;
		border-top: 1px solid #f1f5f9;
		display: flex;
		gap: 0.75rem;
	}

	.chatbot-input input {
		flex: 1;
		padding: 0.75rem 1.25rem;
		border: 1.5px solid #f1f5f9;
		border-radius: 25px;
		font-size: 0.9rem;
		outline: none;
		transition: all 0.3s ease;
		background: #f8fafc;
	}

	.chatbot-input input:focus {
		border-color: #93c750;
		background: white;
		box-shadow: 0 0 0 4px rgba(147, 199, 80, 0.1);
	}

	.chatbot-input button {
		width: 42px;
		height: 42px;
		background: #93c750;
		color: white;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		font-size: 1.2rem;
	}

	.chatbot-input button:hover:not(:disabled) {
		background: #7fb54c;
		transform: scale(1.1);
	}

	.chatbot-input button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media (max-width: 480px) {
		.chatbot-window {
			width: calc(100vw - 60px);
			right: 0;
		}
		.whatsapp-tooltip, .chat-tooltip {
			display: none;
		}
	}
</style>
