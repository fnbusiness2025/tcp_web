import express from 'express';
import authRoutes from './auth.js';

const router = express.Router();

// Mount route modules
router.use('/auth', authRoutes);

// Example of how to organize many endpoints:
// router.use('/users', userRoutes);
// router.use('/properties', propertyRoutes);
// router.use('/services', serviceRoutes);
// router.use('/bookings', bookingRoutes);
// router.use('/payments', paymentRoutes);
// router.use('/notifications', notificationRoutes);
// router.use('/reports', reportRoutes);
// router.use('/admin', adminRoutes);
// router.use('/analytics', analyticsRoutes);
// router.use('/settings', settingsRoutes);
// router.use('/documents', documentRoutes);
// router.use('/messages', messageRoutes);
// router.use('/reviews', reviewRoutes);
// router.use('/categories', categoryRoutes);
// router.use('/locations', locationRoutes);
// router.use('/agents', agentRoutes);
// router.use('/clients', clientRoutes);
// router.use('/contracts', contractRoutes);
// router.use('/invoices', invoiceRoutes);
// router.use('/transactions', transactionRoutes);
// router.use('/support', supportRoutes);
// router.use('/faq', faqRoutes);
// router.use('/blog', blogRoutes);
// router.use('/news', newsRoutes);
// router.use('/events', eventRoutes);
// router.use('/gallery', galleryRoutes);
// router.use('/testimonials', testimonialRoutes);
// router.use('/partners', partnerRoutes);
// router.use('/careers', careerRoutes);
// router.use('/contact', contactRoutes);
// router.use('/newsletter', newsletterRoutes);
// router.use('/social', socialRoutes);
// router.use('/seo', seoRoutes);
// router.use('/api-keys', apiKeyRoutes);
// router.use('/webhooks', webhookRoutes);
// router.use('/integrations', integrationRoutes);
// router.use('/backups', backupRoutes);
// router.use('/logs', logRoutes);
// router.use('/monitoring', monitoringRoutes);
// router.use('/security', securityRoutes);

export default router;
