package com.vunnam.Publisher;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vunnam.Config.MessagingConfig;
import com.vunnam.Model.Customer;

@RestController
public class CustomerPublisher {
	
	@Autowired
	RabbitTemplate template;
	
	@PostMapping("/addCustomer")
	public String addCustomer(@RequestBody Customer customer) {
		template.convertAndSend(MessagingConfig.EXCHANGE,MessagingConfig.ROUTING_KEY, customer);
		return "Send to Queue successfully";
	}
}
