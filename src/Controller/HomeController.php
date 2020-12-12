<?php

namespace App\Controller;

use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    /**
     * @Route("/api/users", name="users")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getUsers(UsersRepository $usersRepository)
    {
        $users = $usersRepository->findAll();

        $headers = array(
            'Content-Type' => 'application/json',
            'Access-Control-Allow-Origin' => '*'
        );

        return $this->json($users, 200, $headers);
    }


}
