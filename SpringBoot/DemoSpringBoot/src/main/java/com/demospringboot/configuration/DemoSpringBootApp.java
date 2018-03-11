package com.demospringboot.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.demospringboot"})
public class DemoSpringBootApp {
	public static void main(String[] args) {
        SpringApplication.run(DemoSpringBootApp.class, args);
    }
}
