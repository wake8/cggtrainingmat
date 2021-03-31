package com.vunnam.Consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.vunnam.Config.MessagingConfig;
import com.vunnam.Dao.MyRepo;
import com.vunnam.Model.Customer;

@Component
public class CustomerNotificationListener {
	
	@Autowired
	MyRepo myRepo;

	@RabbitListener(queues = MessagingConfig.QUEUE)
	public void getNotification(Customer customer) {
		System.out.println(customer);
		myRepo.save(customer);
	}
}
