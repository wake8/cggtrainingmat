package com.vunnam.listener;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vunnam.config.RabbitMQDirectConfig;
import com.vunnam.dao.MyJpaReo;
import com.vunnam.model.Customer;

@Component
public class CustomerQueueListener {
	
	@Autowired
	private RabbitMQDirectConfig config;
	
	@Autowired
	private MyJpaReo repo;
	
	@RabbitListener(queues = "adminQueue")
	public void customerListener(String cust) {
		try {
			Customer cu = new ObjectMapper().readValue(cust, Customer.class);
			repo.save(cu);
			//System.out.println(cust);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
