<?php

namespace App\DataFixtures;

use App\Entity\Users;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;


class AppFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {

        // création de l'utilisateur 1
        $user1 = new Users();
        $user1->setName("Olususi Oluyemi");
        $user1->setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
        $user1->setImageUrl("https://randomuser.me/api/portraits/women/50.jpg");


        // création de l'utilisateur 2
        $user2 = new Users();
        $user2->setName("Camila Terry");
        $user2->setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
        $user2->setImageUrl("https://randomuser.me/api/portraits/men/42.jpg");

        // création de l'utilisateur 3
        $user3 = new Users();
        $user3->setName("Joel Williamson");
        $user3->setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
        $user3->setImageUrl("https://randomuser.me/api/portraits/women/67.jpg");

// création de l'utilisateur 4
        $user4 = new Users();
        $user4->setName("Deann Payne");
        $user4->setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
        $user4->setImageUrl("https://randomuser.me/api/portraits/women/50.jpg");


        // création de l'utilisateur 5
        $user5 = new Users();
        $user5->setName("Donald Perkins");
        $user5->setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
        $user5->setImageUrl("https://randomuser.me/api/portraits/men/89.jpg");

        $manager->persist($user1);
        $manager->persist($user2);
        $manager->persist($user3);
        $manager->persist($user4);
        $manager->persist($user5);

        $manager->flush();
    }
}
